import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
    };

    const handleKakaoLogin = () => {
        console.log("Kakao Login Clicked");
    };

    return (
        <div className="social-login-container">
            <button className="google-login-button" onClick={handleGoogleLogin}>
                Login with Google
            </button>
            <button className="kakao-login-button" onClick={handleKakaoLogin}>
                Login with Kakao
            </button>
        </div>
    );
};

export default SocialLogin;
