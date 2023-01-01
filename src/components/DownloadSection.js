import React from 'react'
import './css/HomePage.css';
import './css/Utils.css';
import playStore from './image/playStore.svg';
import appStore from './image/appStore.svg';
import downloadApp from './image/download-app.svg';

function DownloadSection() {
    return (
        <div className="download-section">
            <div className="download-details">
                <span className="download-title">
                    Download our app now!
                </span>
                <span className='fg-light-grey'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum eveniet, facere voluptatum aspernatur excepturi atque earum perspiciatis a tempora voluptates nisi sint eius quod fugiat, distinctio dolor quisquam expedita.
                </span>
                <div className="play-store-image">
                    <img src={playStore} alt="Play-Store" />
                    <img src={appStore} alt="App-Store" />
                </div>
            </div>
            <div className="download-app-image">
                <div className="purple-bar purple-bg"></div>
                <img src={downloadApp} alt="download-app" />
            </div>
        </div>
    )
}

export default DownloadSection