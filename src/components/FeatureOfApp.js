import React from 'react';
import './css/FeatureOfApp.css';
import FeatureTextBox from './FeatureTextBox';
import featurePhone from './image/feature_phone.svg';

function FeatureOfApp() {
    return (
        <div>

            <section className="feature-details">
                <div className="feature-phone-image">
                    <img src={featurePhone} alt="feature-Phone" />
                </div>
                <div className="features-grid">
                    <div className="feature-title">
                        <span>
                            <span className='fg-blue'>Features</span> of Our App
                        </span>
                    </div>
                    <div className="grid-box">
                        <FeatureTextBox />
                        <FeatureTextBox />
                        <FeatureTextBox />
                        <FeatureTextBox />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureOfApp