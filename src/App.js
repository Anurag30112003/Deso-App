import "./App.css";
import Deso from "deso-protocol";
import { useState } from "react";
import React from "react" ;
const deso = new Deso();

function App() { 
  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [postResponse, setPostResponse] = useState();

  // Forms Input
  
  const [body, setBody] = useState('');

  return (
    <div>
      <button
        onClick={async () => {
          const user = await deso.identity.login();
          console.log(user);
          setLoginResponse(JSON.stringify(user, null, 2));
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          deso.identity.logout(deso.identity.getUserKey());
        }}
      >
        logout
      </button>
      <button
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


     <form >
        <label>
          Description:
          <input type="text" value={body}  onChange={(e)=> setBody(e.target.value) } />
          {/* <p> {body} </p> */}
        </label>
      </form>
      <button
        onClick={async () => {
          const postResponse = await deso.posts.submitPost({
            UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
            BodyObj: {
              Body:body,
              VideoURLs: [],
              ImageURLs: [],
            },
          });
          setPostResponse(JSON.stringify(postResponse, null, 2));
        }}
      >
        submit post
      </button>
      <div>
        Login info
        <pre>{loginResponse}</pre>
      </div>
      <div>
        User info
        <pre>{sampleResponse}</pre>
      </div>
      setPostResponse
      <div>
        User info
        <pre>{postResponse}</pre>
      </div>
    </div>
  );
}

export default App;
