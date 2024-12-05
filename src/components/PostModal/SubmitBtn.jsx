import React from "react";
import "./SubmitBtn.css"; // 버튼 스타일을 위한 CSS 파일

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
