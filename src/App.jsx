// import logo from './logo.svg';

// npm modules
import { useEffect } from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom'

// page components

// components

// services

// styles
import './App.css';


function App() {

  function handleCallbackResponse (response) {
    console.log("Encoded JWT ID token: " + response) 
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "456077930059-8rborco2ilemn1g3p5clj4m7tgsefia1.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: "large"}
    )
  }, [])

  return (
    <>
      {/* <Routes>
      </Routes> */}
      <div className="App">
        <header className="App-header">
          <h1>Swishsesh Google Login!</h1>
          <div id="signInDiv"></div>
        </header>
      </div>
    </>
  );
}

export default App;
