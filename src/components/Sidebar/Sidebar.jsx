import './Sidebar.css';
import React from 'react';
import logo from '../../assets/truegram.png';
import direct from '../../assets/direct.png';
import explore from '../../assets/explore.png';
import home from '../../assets/home.png';
import love from '../../assets/love.png';
import magnifier from '../../assets/magnifier.png';
import plus from '../../assets/plus.png';
import video from '../../assets/video.png';
import profile from '../../assets/profile.png';
import menu from '../../assets/menu.png';
import threads from '../../assets/threads.png';

const Sidebar = ({ setIsModalOpen }) => {
    return (
        <div className="sidebar">
            {/* 로고 */}
            <img src={logo} alt="Sidebar Logo" className="sidebar-logo" />

            {/* 아이콘 메뉴 */}
            <div className="sidebar-menu">
                <div className="sidebar-item">
                    <img src={home} alt="Home" className="sidebar-icon" />
                    <span className="sidebar-text">홈</span>
                </div>
                <div className="sidebar-item">
                    <img src={magnifier} alt="Search" className="sidebar-icon" />
                    <span className="sidebar-text">검색</span>
                </div>
                <div className="sidebar-item">
                    <img src={explore} alt="Explore" className="sidebar-icon" />
                    <span className="sidebar-text">탐색 탭</span>
                </div>
                <div className="sidebar-item">
                    <img src={video} alt="Video" className="sidebar-icon" />
                    <span className="sidebar-text">릴스</span>
                </div>
                <div className="sidebar-item">
                    <img src={direct} alt="Direct" className="sidebar-icon" />
                    <span className="sidebar-text">메세지</span>
                </div>
                <div className="sidebar-item">
                    <img src={love} alt="Likes" className="sidebar-icon" />
                    <span className="sidebar-text">알림</span>
                </div>
                <div className="sidebar-item">
                    <img src={plus} alt="Create" className="sidebar-icon" onClick={() => setIsModalOpen(true)} />
                    <span className="sidebar-text">만들기</span>
                </div>
                <div className="sidebar-item">
                    <img src={profile} alt="Profile" className="sidebar-icon" />
                    <span className="sidebar-text">프로필</span>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-item">
                    <img src={threads} alt="Threads" className="sidebar-icon" />
                    <span className="sidebar-text">Threads</span>
                </div>
                <div className="sidebar-item">
                    <img src={menu} alt="Menu" className="sidebar-icon" />
                    <span className="sidebar-text">더보기</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
