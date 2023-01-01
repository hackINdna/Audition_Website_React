import React from 'react';
import './css/ProfileCreated.css';
import './css/Utils.css';
import profileImage from './image/profile-face.svg';
import mPin from './image/mpin.svg';
import rightArrow from './image/right_arrow.svg';
import BasicProfileSec from './BasicProfileSec';
import AppearProfileSec from './AppearProfileSec';
import SubsProfileSec from './SubsProfileSec';

import { Link } from 'react-router-dom';

function ProfileCreated() {
    return (
        <div className="body-sec">
            <div className='profile-created-section'>
                <div className="left-section">
                    <Link to=""><button className="basic-btn left-btn "><span>Basic Info</span><img src={rightArrow} alt="Right-Arrow" /></button></Link>
                    <Link to=""><button className="app-btn left-btn "><span>Appearance</span><img src={rightArrow} alt="Right-Arrow" /></button></Link>
                    <Link to=""><button className="sub-btn left-btn "><span>Subscription</span><img src={rightArrow} alt="Right-Arrow" /></button></Link>
                </div>
                <div className="right-section">
                    <div className="right-top">
                        <span className='blue-unline'>Detail</span>
                        <span className='blue-unline'>Media</span>
                    </div>

                    <div className="right-profile-section">
                        <div className="image-sec">
                            <img src={profileImage} alt="profile-face" />
                            <div className="img-change-sec">
                                <span className='fg-blue-btn'>Change</span>
                                <span className='fg-blue-btn'>Delete</span>
                            </div>
                        </div>
                        <div className="p-detail-sec">
                            <span className='font-35 mr-y-10'>Leslie Alexander</span>
                            <span className='font-25 '>Your Profile Strength</span>
                            <span className='mr-y-10'><img src={mPin} alt="mpin-icon" /> 092 Hessel Junctions</span>
                        </div>
                        <div className="editBtn-sec">
                            <span className='blue-unline'>Edit</span>
                        </div>
                    </div>
                    {/* <BasicProfileSec /> */}
                    {/* <AppearProfileSec /> */}
                    <SubsProfileSec />
                </div>
            </div>
        </div>
    )
}

export default ProfileCreated