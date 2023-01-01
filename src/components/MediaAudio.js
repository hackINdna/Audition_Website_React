import React from 'react'
import audioIcon from './image/mic.svg';
import add from './image/add.svg';
import emptyIcon from './image/emptyIcon.svg';

function MediaAudio() {
    return (
        <div className="right-bottom">
            <div className="r-b-top">
                <img src={audioIcon} alt="audio-icon" />
                <div className="picture-section">
                    <span>0 Audios</span>
                    <img src={add} alt="add-icon" />
                </div>
            </div>
            <div className="r-b-data empty-area">
                <img src={emptyIcon} alt="empty-icon" />
                <span className="grey-text">
                    You don't have any audio added yet
                </span>
            </div>
        </div>
    )
}

export default MediaAudio
