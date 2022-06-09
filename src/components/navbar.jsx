
import Deso from "deso-protocol";
import { useState } from "react";
import React from "react";
const deso = new Deso();
function Navbar() {

  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();

  return (    
  <div className="bg-blue-500 text-center">
    <button
    className=" mx-4  hover:bg-blue-700 text-white font-bold py-5 px-8 "
        onClick={async () => {
          const user = await deso.identity.login();
          console.log(user);
          setLoginResponse(JSON.stringify(user, null, 2));
        }}
      >
        login
      </button>
      <button
          className=" mx-4 hover:bg-blue-700 text-white font-bold py-5  px-8 "

        onClick={() => {
          deso.identity.logout(deso.identity.getUserKey());
        }}
      >
        logout
      </button>
      <button
          className=" mx-4 hover:bg-blue-700 text-white font-bold py-5  px-8 "

        onClick={async () => {
          const user = await deso.user.getSingleProfile({
            PublicKeyBase58Check: deso.identity.getUserKey(),
          });
          console.log(user);
          setSampleResponse(JSON.stringify(user, null, 2));
        }}
      >
        get user
      </button>
  </div>
  );
}

export default Navbar;
