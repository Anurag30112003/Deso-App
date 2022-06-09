import Makepost from "./components/makePost";
import "./App.css";
import Deso from "deso-protocol";
import { useState } from "react";
import React from "react" ;
import Navbar from "./components/navbar";
const deso = new Deso();

function App() { 
  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [postResponse, setPostResponse] = useState();

  // Forms Input
  
  // const [body, setBody] = useState('');

  return (
    <div>
  
     
     <Navbar/>
      <Makepost/>

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
