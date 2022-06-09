import Makepost from "./components/makePost";
import Deso from "deso-protocol";
import GetPosts from "./components/getPosts";
import { useState } from "react";
import React from "react" ;
import Navbar from "./components/navbar";
const deso = new Deso();

function App() { 
  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [postResponse, setPostResponse] = useState();

  return (
    <div>
     <Navbar/>
      <Makepost/>
      {/* <GetPosts/> */}
      <div>
        Login info
        <pre>{loginResponse}</pre>
      </div>
      <div>
        User info
        <pre>{sampleResponse}</pre>
      </div>
      setPostResponse

    </div>
  );
}

export default App;
