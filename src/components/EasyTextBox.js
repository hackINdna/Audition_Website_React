import React from 'react'
import './css/EasyTextBox.css';
import './css/Utils.css';

function EasyTextBox(props) {
    return (
        <div className='easy-text-div light-pink-bg box-shd'>
            <div className="easy-yellow-circle">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <h2 className='mr-y-30 t-a-c'>
                {props.title}
            </h2>
            <p className='font-18'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis illum qui dolorum ut a, quisquam rem, culpa aliquid nisi beatae deleniti quam! Tempore commodi suscipit consequuntur dolorum, maiores perspiciatis!
            </p>
        </div>
    )
}

export default EasyTextBox