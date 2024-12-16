// Feed.jsx
import React from "react";
import PostItem from "./PostItem";
import "./Feed.css";

const Feed = ({ posts }) => {
    return (
        <div className="feed">
            {posts.length > 0 ? (
                posts.map((post) => <PostItem key={post.id} post={post} />)
            ) : (
                <p className="no-posts">게시물이 없습니다. 새 게시물을 만들어보세요!</p>
            )}
        </div>
    );
};

export default Feed;
