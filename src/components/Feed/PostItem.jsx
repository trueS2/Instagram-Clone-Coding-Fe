// PostItem.jsx
import React from "react";
import "./PostItem.css";
import dotsIcon from "../../assets/dots.png";
import loveIcon from '../../assets/love.png';
import directIcon from '../../assets/direct.png';
import commentIcon from '../../assets/comment.png';
import savedIcon from '../../assets/saved.png';

const PostItem = ({ post }) => {
    return (
        <div className="post-item">
            {/* 프로필 헤더 */}
            <div className="post-header">
                <img src={post.profileImage} alt="Profile" className="profile-image" />
                <span className="post-user">{post.user}</span>
                <img src={dotsIcon} alt="More" className="more-icon" />
            </div>
            {/* 게시글 이미지 */}
            <img src={post.imageUrl} alt="Post" className="post-image" />
            {/* 하단 아이콘들 */}
            <div className="post-actions">
                <div className="left-actions">
                    <img src={loveIcon} alt="Like" className="post-action-icon" />
                    <img src={commentIcon} alt="Comment" className="post-action-icon" />
                    <img src={directIcon} alt="Direct" className="post-action-icon" />
                </div>
                <img src={savedIcon} alt="Save" className="post-action-icon save-icon" />
            </div>
            {/* 좋아요 갯수 */}
            <div className="likes-count">{post.likes} 좋아요</div>
            {/* 캡션 */}
            <div className="post-caption">
                <strong>{post.user}</strong> {post.caption}
            </div>
        </div>
    );
};

export default PostItem;
