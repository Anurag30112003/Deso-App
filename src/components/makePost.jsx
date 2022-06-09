// import "./App.css";
import Deso from "deso-protocol";
import { useState } from "react";
import React from "react";
const deso = new Deso();

function Makepost() {
  const [postResponse, setPostResponse] = useState();

  const [body, setBody] = useState("");

  return (
    <div>
      <form className="text-center">
        <label>
          Description:
          <input className="my-5 mx-3 border-solid border-2 border-gray-600"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
           {/* <p> {body} </p>  */}
        </label>
        <br />
      </form>
      <div className="text-center">
      <button
      className="my-5 mx-3  bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-8  "
        onClick={async () => {
          const postResponse = await deso.posts.submitPost({
            UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
            BodyObj: {
              Body: body,
              VideoURLs: [],
              ImageURLs: [],
            },
          });
          setPostResponse(JSON.stringify(postResponse, null, 3));
        }}
      >
        submit post
      </button></div>
      <div>
        Post info
        <pre>{postResponse}</pre>
      </div>
      {/* <h1 className="text-3xl text-red-500 font-bold underline">
      Hello world!
    </h1> */}
    </div>
  );
}
export default Makepost;
