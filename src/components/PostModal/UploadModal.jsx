// UploadModal.jsx
import React from "react";
import "./PostModal.css"; // PostModal 스타일 임포트
import ImageDropZone from "./ImageDropZone"; // 이미지 드롭존 컴포넌트
import PostDetails from "./PostDetails"; // 게시글 세부 정보 컴포넌트

const UploadModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>새 게시물 만들기</h2>
                <ImageDropZone />
                <PostDetails />
            </div>
        </div>
    );
};

export default UploadModal;
