import React from 'react'
import camera from './image/camera.svg';
import add from './image/add.svg';
import m1 from './image/m1.png';
import m2 from './image/m2.png';
import m3 from './image/m3.png';

function MediaPhoto() {
    return (

        <div className="right-bottom">
            <div className="r-b-top">
                <img src={camera} alt="camera-icon" />
                <div className="picture-section">
                    <span>8 Pictures</span>
                    <img src={add} alt="add-icon" />
                </div>
            </div>
            <div className="r-b-data">
                <img src={m1} alt="m1" />
                <img src={m2} alt="m2" />
                <img src={m3} alt="m3" />
                <img src={m1} alt="m1" />
                <img src={m2} alt="m2" />
                <img src={m3} alt="m3" />
                <img src={m2} alt="m2" />
                <img src={m3} alt="m3" />
            </div>
        </div>
    )
}

export default MediaPhoto
