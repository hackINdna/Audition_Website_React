import React from 'react'
import add from './image/add.svg';
import docIcon from './image/documentIcon.svg';
import emptyIcon from './image/emptyIcon.svg';

function MediaDoc() {
    return (
        <div className="right-bottom">
            <div className="r-b-top">
                <img src={docIcon} alt="doc-icon" />
                <div className="picture-section">
                    <span>0 Audios</span>
                    <img src={add} alt="add-icon" />
                </div>
            </div>
            <div className="r-b-data empty-area">
                <img src={emptyIcon} alt="empty-icon" />
                <span className="grey-text">
                    You don't have any document added yet
                </span>
            </div>
        </div>
    )
}

export default MediaDoc
