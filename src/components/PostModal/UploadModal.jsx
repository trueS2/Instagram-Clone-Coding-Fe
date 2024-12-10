import React, { useState } from "react";
import "./PostModal.css";
import ImageDropZone from "./ImageDropZone";
import PostDetails from "./PostDetails";
import SubmitBtn from "./SubmitBtn";

const UploadModal = ({ isOpen, onClose }) => {
    const [file, setFile] = useState(null); // 업로드된 파일 상태
    const [caption, setCaption] = useState(""); // 게시글 캡션 상태

    const handleSubmit = () => {
        if (!file || !caption) {
            alert("이미지와 캡션을 모두 입력하세요!");
            return;
        }

        // 서버에 데이터 전송 로직
        console.log("업로드할 데이터:", { file, caption });
        alert("게시물이 업로드되었습니다!");
        onClose(); // 모달 닫기
    };

    if (!isOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>새 게시물 만들기</h2>
                {/* 이미지 드롭존 */}
                <ImageDropZone setFile={setFile} />
                {/* 게시글 세부 정보 */}
                <PostDetails setCaption={setCaption} />
                {/* 공유하기 버튼 */}
                <SubmitBtn
                    onClick={handleSubmit}
                    disabled={!file || !caption} // 파일과 캡션이 없으면 비활성화
                />
            </div>
        </div>
    );
};

export default UploadModal;
