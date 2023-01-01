import React from 'react'
import './css/Nav.css';
import './css/Utils.css';
import notificationBtn from './image/notification.svg';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav className='navbar-m'>
            <h3 className='font-35'>Audition Portal</h3>
            <div className="sections">
                <ul className='section-area font-25 font-bold'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/studio">Studio</Link>
                    </li>
                </ul>
            </div>
            <div className="button-section">
                <button className="notification-btn yellow-bg">
                    <img className='pd-x-10' src={notificationBtn} alt="notification" />
                </button>
                <Link to="/profile-edit" ><button className="create-profile-btn yellow-bg font-18">Create Profile</button></Link>
            </div>
        </nav>
    );
}

export default Nav