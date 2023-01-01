import React from 'react';
import './css/ProfileEdit.css';
import './css/Utils.css';
import cross from './image/cross.svg';
import tick from './image/tick.svg';
import face from './image/f6.jpg';

function ProfileEdit() {
    return (
        <div className="body-sec">
            <div className='edit-section'>
                <div className="edit-section-top">
                    <img src={cross} alt="cross-icon" />
                    <div className="edit-title">
                        <span className="edit-text">
                            Edit Profile
                        </span>
                        <img src={tick} alt="tick-icon" />
                    </div>
                </div>

                <section className="change-image">
                    <img src={face} alt="face-icon" />
                    <span>Edit Photo</span>
                </section>

                <section className="detail-section">
                    <div className="input-area">
                        <label htmlFor="name-input">Name</label>
                        <input placeholder='Enter your name' type="text" id="name-input" />
                    </div>
                    <div className="input-area">
                        <label htmlFor="location-input">Location</label>
                        <input placeholder='Enter your location' type="text" id="location-input" />
                    </div>
                    <div className="input-area">
                        <label htmlFor="gender-input">Gender</label>
                        <input placeholder='Enter your gender' type="text" id="gender-input" />
                    </div>
                    <div className="input-area">
                        <label htmlFor="profile-input">Profile Name</label>
                        <input placeholder='Enter your profile name' type="text" id="profile-input" />
                    </div>
                    <div className="input-area">
                        <label htmlFor="profile-url-input">Profile URL</label>
                        <input placeholder='Enter your profile url' type="text" id="profile-url-input" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfileEdit