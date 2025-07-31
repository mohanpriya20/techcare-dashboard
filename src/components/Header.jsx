import React, { useState } from 'react';
import TestLogo from '../assets/TestLogo.png';
import homeIcon from '../assets/main-nav-icons/home.png';
import groupIcon from '../assets/main-nav-icons/group.png';
import calendarIcon from '../assets/main-nav-icons/calendar.png';
import chatIcon from '../assets/main-nav-icons/chat.png';
import creditCardIcon from '../assets/main-nav-icons/credit_card.png';
import userAvatar from '../assets/user-profile/user-avatar.png';
import settingsIcon from '../assets/user-profile/settings.png';
import ellipsisIcon from '../assets/user-profile/ellipses.png';
import './Header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('patients');

  const handleNavClick = (navItem) => {
    // Navigation to patients page only
    if (navItem === 'patients') {
      setActiveNav(navItem);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={TestLogo} alt="TestLog" className="logo-image" />
        </div>

        <nav className="main-nav">
          <button 
            className={`nav-item ${activeNav === 'overview' ? 'active' : ''}`}
            onClick={() => handleNavClick('overview')}
          >
            <img src={homeIcon} alt="Overview" className="nav-icon" />
            Overview
          </button>
          <button 
            className={`nav-item ${activeNav === 'patients' ? 'active' : ''}`}
            onClick={() => handleNavClick('patients')}
          >
            <img src={groupIcon} alt="Patients" className="nav-icon" />
            Patients
          </button>
          <button 
            className={`nav-item ${activeNav === 'schedule' ? 'active' : ''}`}
            onClick={() => handleNavClick('schedule')}
          >
            <img src={calendarIcon} alt="Schedule" className="nav-icon" />
            Schedule
          </button>
          <button 
            className={`nav-item ${activeNav === 'message' ? 'active' : ''}`}
            onClick={() => handleNavClick('message')}
          >
            <img src={chatIcon} alt="Message" className="nav-icon" />
            Message
          </button>
          <button 
            className={`nav-item ${activeNav === 'transactions' ? 'active' : ''}`}
            onClick={() => handleNavClick('transactions')}
          >
            <img src={creditCardIcon} alt="Transactions" className="nav-icon" />
            Transactions
          </button>
        </nav>
        
        <div className="user-profile">
          <img src={userAvatar} alt="Dr. Jose Simmons" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Dr. Jose Simmons</span>
            <span className="user-role">General Practitioner</span>
          </div>
          <div className="profile-separator"></div>
          <img src={settingsIcon} alt="Settings" className="profile-icon" />
          <img src={ellipsisIcon} alt="More options" className="profile-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header; 