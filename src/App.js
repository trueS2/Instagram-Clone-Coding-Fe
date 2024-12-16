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
      caption: "에바띵",
      imageUrl: "https://via.placeholder.com/600x400",
      profileImage: "https://via.placeholder.com/50",
      likes: 2217,
    },
    {
      id: 2,
      user: "user2",
      caption: "에바뚱띠",
      imageUrl: "https://via.placeholder.com/600x400",
      profileImage: "https://via.placeholder.com/50",
      likes: 1345
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
