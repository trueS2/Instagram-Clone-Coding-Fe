import React from "react";
import "./SubmitBtn.css";

const SubmitBtn = ({ onClick, disabled }) => {
    return (
        <button
            className="submit-btn"
            onClick={onClick}
            disabled={disabled}
        >
            공유하기
        </button>
    );
};

export default SubmitBtn;
