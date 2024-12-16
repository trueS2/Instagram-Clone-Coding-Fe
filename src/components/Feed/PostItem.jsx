// PostItem.jsx
import React from "react";
import "./PostItem.css";

const PostItem = ({ post }) => {
    return (
        <div className="post-item">
            <div className="post-header">
                <span className="post-user">{post.user}</span>
            </div>
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <div className="post-caption">
                <strong>{post.user}</strong> {post.caption}
            </div>
        </div>
    );
};

export default PostItem;
