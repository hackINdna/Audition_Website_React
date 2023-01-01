import React from 'react';
import st1 from './image/st1.svg';
import mPin from './image/mpin.svg';
import './css/StudioCard.css';
import './css/Utils.css';

function StudioCard() {
    return (
        <div className='card'>
            <div className="image-section">
                <img src={st1} alt="studio1" />
            </div>
            <div className="details">
                <p className="studio-name">
                    officiis quam harum
                </p>
                <span className='dis-flex'>
                    <img className='mPin' src={mPin} alt="map-pin" />
                    <span>
                        780 Levi Meadows
                    </span>
                </span>
            </div>

        </div>
    )
}

export default StudioCard