import React from 'react';
import './css/ProfileCreatedMedia.css';
import profileImage from './image/profile-face.svg';
import mPin from './image/mpin.svg';
import rightArrow from './image/right_arrow.svg';

import BasicProfileSec from './BasicProfileSec';
import AppearProfileSec from './AppearProfileSec';
import SubsProfileSec from './SubsProfileSec';
import MediaPhoto from './MediaPhoto';
import MediaVideo from './MediaVideo';
import MediaAudio from './MediaAudio';
import MediaDoc from './MediaDoc';

function ProfileCreatedMedia() {
    return (
        <div className="body-sec">
            <div className='profile-created-section'>
                <div className="left-section">
                    <button className="photo-btn left-btn "><span>Photos</span><img src={rightArrow} alt="Right-Arrow" /></button>
                    <button className="video-btn left-btn "><span>Videos</span><img src={rightArrow} alt="Right-Arrow" /></button>
                    <button className="audio-btn left-btn "><span>Audios</span><img src={rightArrow} alt="Right-Arrow" /></button>
                    <button className="doc-btn left-btn "><span>Documents</span><img src={rightArrow} alt="Right-Arrow" /></button>
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
                    {/* <SubsProfileSec /> */}

                    <MediaPhoto />
                    {/* <MediaVideo /> */}
                    {/* <MediaAudio /> */}
                    {/* <MediaDoc /> */}
                </div>
            </div>
        </div>
    )
}

export default ProfileCreatedMedia
