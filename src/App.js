import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Users2 from './components/Users2';


function App() {

    const superUser = {
        username: 'admin',
        password: 'admin'
    }

    const [user, setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username === superUser.username && details.password === superUser.password) {
            console.log("Login Successful");
            setUser({
                name: details.name,
                username: details.username
            });
        } else {
            console.log("Login Failed");
            setError("Login Failed!!!");
        }
    }

    const Logout = () => {
        alert("GET OUT!")
        setUser({ 
            name: "",
            username: "" 
        });
    }
    
  return (
    <div className="App">
        <Navbar />
        {(user.username !== '') ? (
            <div className='Welcome'>
            <h2>Welcome, <span>{user.username}</span></h2>
            <button onClick={Logout}>Logout</button>
            </div>
        ) : (
        <LoginForm Login={Login} error={error}  />
        )}
        <Users2 />
    </div>
  );
}

export default App;
