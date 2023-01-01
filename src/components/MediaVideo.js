import React from 'react'
import vid1 from './image/vid1.svg';
import vid2 from './image/vid2.svg';
import vid3 from './image/vid3.svg';
import videoIcon from './image/video-icon.svg';
import add from './image/add.svg';

function MediaVideo() {
    return (
        <div className="right-bottom">
            <div className="r-b-top">
                <img src={videoIcon} alt="video-icon" />
                <div className="picture-section">
                    <span>3 Videos</span>
                    <img src={add} alt="add-icon" />
                </div>
            </div>
            <div className="r-b-data">
                <img src={vid1} alt="vid1" />
                <img src={vid2} alt="vid2" />
                <img src={vid3} alt="vid3" />
            </div>
        </div>
    )
}

export default MediaVideo
