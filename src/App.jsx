// import logo from './logo.svg';

// npm modules
import { useEffect, useState } from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

// page components

// components

// services

// styles
import './App.css';


function App() {
  const [user, setUser] = useState({})

  function handleCallbackResponse (response) {
    console.log("Encoded JWT ID token: " + response.credential) 
    const userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true
  }

  function handleSignOut(event) {
    setUser({})
    document.getElementById("signInDiv").hidden = false
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

    google.accounts.id.prompt()
  }, [])

  return (
    <>
      {/* <Routes>
      </Routes> */}
      <div className="App">
        <header className="App-header">
          <h1>Swishsesh Google Login!</h1>
          <div id="signInDiv"></div>
          { Object.keys(user).length !== 0 &&
            <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
          }
          { user.name ?
            <div>
              <img src={user.picture} alt="profile"></img>
              <h3>{user.name}</h3>
            </div>
            : <h1>Login!</h1>
          }
        </header>
      </div>
    </>
  );
}

export default App;
