// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar"; // Sidebar 컴포넌트 임포트
import UploadModal from "./components/PostModal/UploadModal"; // UploadModal 컴포넌트 임포트
import "./index.css"; // 글로벌 스타일

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Sidebar setIsModalOpen={setIsModalOpen} /> {/* Sidebar 렌더링 */}
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* UploadModal 렌더링 */}
    </div>
  );
}

export default App;
