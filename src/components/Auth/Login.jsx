import React from "react";
import "./Login.css";
import SocialLogin from "./SocialLogin";

const Login = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Welcome to truegram!</h1>
            <form className="login-form">
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="social-login">
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
