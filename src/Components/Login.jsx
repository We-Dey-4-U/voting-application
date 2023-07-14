import React from "react";

//props are input parameter to the login function..props gives us the function connectwallet
const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to Nigeria decentralized voting application</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
        </div>
    )
}

export default Login;