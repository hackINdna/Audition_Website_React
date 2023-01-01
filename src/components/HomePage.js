import React from 'react';
import './css/HomePage.css';
import './css/Utils.css';
import easyShare from './image/easyShare.svg';
import easyComm from './image/easyComm.svg';
import easyApply from './image/easyApply.svg';
import EasyTextBox from './EasyTextBox'
import FeatureOfApp from './FeatureOfApp';
import MainPagePurple from './MainPagePurple'
import DownloadSection from './DownloadSection';

function HomePage() {
    return (
        <>
            <MainPagePurple />
            <div className="easy-detail-section">
                <EasyTextBox title="Easy to share" image={easyShare} />
                < EasyTextBox title="Easy to communicate" image={easyComm} />
                <EasyTextBox title="Easy to apply" image={easyApply} />
            </div>
            <FeatureOfApp />
            <DownloadSection />
        </>
    )
}

export default HomePage