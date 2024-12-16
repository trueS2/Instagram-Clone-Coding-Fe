// UploadModal.jsx
import React, { useState } from "react";
import "./PostModal.css";
import ImageDropZone from "./ImageDropZone";
import PostDetails from "./PostDetails";
import SubmitBtn from "./SubmitBtn";

const UploadModal = ({ isOpen, onClose, addPost }) => {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");

    const handleSubmit = () => {
        if (!file && !caption) {
            alert("이미지나 캡션 중 하나는 입력해야 합니다!");
            return;
        }

        // 새로운 게시글 추가
        const newPost = {
            id: Date.now(),
            user: "current_user", // 현재 사용자 이름
            caption,
            imageUrl: URL.createObjectURL(file), // 업로드한 이미지의 URL
        };
        addPost(newPost);
        alert("게시물이 업로드되었습니다!");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    X
                </button>
                <h2>새 게시물 만들기</h2>
                <ImageDropZone setFile={setFile} />
                <PostDetails setCaption={setCaption} />
                <SubmitBtn onClick={handleSubmit} disabled={!file && !caption} />
            </div>
        </div>
    );
};

export default UploadModal;
