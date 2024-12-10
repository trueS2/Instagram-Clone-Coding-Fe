import React, { useState } from "react";
import "./PostModal.css";

const ImageDropZone = ({ setFile }) => {
    const [isDragging, setIsDragging] = useState(false); // 드래그 상태 표시
    const [preview, setPreview] = useState(null); // 이미지 미리보기 URL

    const handleDragOver = (e) => {
        e.preventDefault(); // 기본 동작 방지
        setIsDragging(true); // 드래그 상태 활성화
    };

    const handleDragLeave = () => {
        setIsDragging(false); // 드래그 상태 비활성화
    };

    const handleDrop = (e) => {
        e.preventDefault(); // 기본 동작 방지
        setIsDragging(false); // 드래그 상태 비활성화

        const files = e.dataTransfer.files; // 드롭된 파일 가져오기
        if (files.length > 0) {
            const file = files[0]; // 첫 번째 파일만 사용

            // 파일 형식 확인
            if (!file.type.startsWith("image/")) {
                alert("이미지 파일만 첨부할 수 있습니다.");
                return;
            }

            setFile(file); // 부모 컴포넌트로 파일 전달
            setPreview(URL.createObjectURL(file)); // 미리보기 URL 생성
        } else {
            alert("파일을 드롭해주세요!");
        }
    };

    const handleClearPreview = () => {
        setPreview(null); // 미리보기 초기화
        setFile(null); // 부모 컴포넌트에 파일 초기화 전달
    };

    return (
        <div className={`drop-zone ${isDragging ? "dragging" : ""}`} // 드래그 상태에 따라 스타일 변경
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            {preview ? (
                <div className="preview-container">
                    <img src={preview} alt="미리보기" className="preview-image" />
                    <button className="clear-btn" onClick={handleClearPreview}>
                        이미지 제거
                    </button>
                </div>
            ) : (
                <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            )}
        </div>
    );
};

export default ImageDropZone;
