// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import UploadModal from "./components/PostModal/UploadModal";
import Feed from "./components/Feed/Feed";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 목 데이터
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "user1",
      caption: "오늘의 멋진 풍경입니다!",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      user: "user2",
      caption: "강아지 산책 중 찍은 사진",
      imageUrl: "https://via.placeholder.com/600x400",
    },
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar setIsModalOpen={setIsModalOpen} />
      <div style={{ flex: 1 }}>
        <Feed posts={posts} />
      </div>
      <UploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addPost={addPost}
      />
    </div>
  );
}

export default App;
