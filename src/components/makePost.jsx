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
      <form>
        <label>
          Description:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {/* <p> {body} </p> */}
        </label>
      </form>
      <button
        onClick={async () => {
          const postResponse = await deso.posts.submitPost({
            UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
            BodyObj: {
              Body: body,
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
        User info
        <pre>{postResponse}</pre>
      </div>
    </div>
  );
}
export default Makepost;
