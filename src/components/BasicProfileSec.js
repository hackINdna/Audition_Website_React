import React from 'react'
import './css/ProfileCreated.css';
import './css/Utils.css';
import SwitchButton from './SwitchButton';

function BasicProfileSec() {
    return (
        <div className="prof-details">
            <div className="prof-d">
                <span className='font-25 wd-200'>Gender</span>
                <span className='font-25'>Female</span>
            </div>
            <hr />
            <div className="prof-d">
                <span className='font-25 wd-200'>Profile URL</span>
                <span className='font-25'>https://in.diva.com/pin/706043113724/</span>
            </div>
            <hr />
            <div className="prof-d">
                <span className='font-25 wd-200'>Profession Title</span>
                <span className='font-25'>Actor</span>
            </div>
            <hr />
            <div className="visible prof-d">
                <span style={{ paddingBottom: "20px" }}>Profile Visibility</span>
                <div style={{ display: "flex", alignItems: "center", }}>
                    <SwitchButton />
                    <span style={{ fontSize: "18px", marginLeft: "20px" }}>Public</span>
                </div>
            </div>
        </div>
    )
}

export default BasicProfileSec