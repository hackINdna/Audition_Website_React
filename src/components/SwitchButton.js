import React from 'react';
import './css/SwitchButton.css';

function SwitchButton() {

    return (
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    )
}

export default SwitchButton
