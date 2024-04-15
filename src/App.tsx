import "./App.css";
import { useState } from "react";

function App() {
  const [test, setTest] = useState("");
  const initTrueCaller = () => {
    window.location = `truecallersdk://truesdk/web_verify?
    type=btmsheet
  requestNonce=123456789598
  &partnerKey=f5SDB5d3502a1593c4e4eba5e4714dfbf2c7c
  &partnerName=Testing
  &skipOption=Continue`;

    setTimeout(function () {
      if (document.hasFocus()) {
        // Truecaller app not present on the device and you redirect the user
        // to your alternate verification page
        setTest("Not Android");
      } else {
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
        setTest("Android App");
      }
    }, 600);
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Install TrueCaller on your mobile device, </p>
        <p>
          Run shutdown and rerun app on mobile. See <u>Readme</u> for help
        </p>
        <p style={{ marginBottom: "10px" }}>
          Click Button to Initilize TrueCaller
        </p>
        <p>Is the device the an android {test}</p>

        <button
          style={{
            padding: "0.5rem",
            borderRadius: "8px",
            border: 0,
            color: "white",
            background: "#000435",
            cursor: "pointer",
          }}
          onClick={initTrueCaller}
        >
          Init TrueCaller
        </button>
      </div>
    </>
  );
}

export default App;
