import React from 'react';
import './css/ProfileCreated.css';
import './css/Utils.css';

function SubsProfileSec() {
    return (
        <div className='subs-detail'>
            <div className="alert-text">
                <h2>
                    You have not subscribed yet!!
                </h2>
                <hr />
                <span className='font-20'>Our subscription plans</span>
            </div>
            <div className="three-plans">
                <div className="three month">3 Months</div>
                <div className="six month">6 Months</div>
                <div className="twelve month">12 Months</div>
            </div>
            <div className="plan-details">
                <div className="plan">
                    <div className="plan-top">
                        <span className='font-20'>Gold</span>
                        <span className='font-16'>ERD872</span>
                    </div>
                    <div className="plan-middle">
                        <ul>
                            <li>Faucibus diam lorem diam tellus libero.</li>
                            <li>Diam nisi faucibus vivamus vitae aenean mus morbi.</li>
                            <li>Vel vestibulum, pharetra diam nullam diam commodo.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="choose-plan">
                        <button className="pay-now">PAY NOW</button>
                    </div>
                </div>

                <div className="plan">
                    <div className="plan-top">
                        <span className='font-20'>Gold</span>
                        <span className='font-16'>ERD872</span>
                    </div>
                    <div className="plan-middle">
                        <ul>
                            <li>Faucibus diam lorem diam tellus libero.</li>
                            <li>Diam nisi faucibus vivamus vitae aenean mus morbi.</li>
                            <li>Vel vestibulum, pharetra diam nullam diam commodo.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="choose-plan">
                        <button className="pay-now">PAY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubsProfileSec