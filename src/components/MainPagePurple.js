import React from 'react';
import './css/MainPagePurple.css';
import './css/Utils.css';
import searchIcon from './image/search_icon.svg';
import phone3 from './image/phone3.svg';

function MainPagePurple() {
    return (
        <div className='purple-div purple-bg dis-flex f-col '>
            <div className="search-div dis-flex j-c-c light-purple-bg">
                <img className='mr-x-15' src={searchIcon} alt="" />
                <input className='font-16 pd-y-15 light-purple-bg' type="text" placeholder='Search Studio...' />
            </div>
            <section className="purple-text-area t-a-c ">
                <span className='all-zero fg-white font-35'>
                    Aenean faucibus ipsum lectus elit, sapien adipiscing consequat in.
                </span>
                <p className='fg-white font-20'>
                    Est sit sagittis sem auctor. Neque amet, nunc fringilla et morbi fermentum tincidunt tempor. Sed feugiat quam arcu, nulla lectus sem morbi.
                </p>
            </section>
            <section className="phone-section t-a-c">
                <img src={phone3} alt="three-phones" />
            </section>
        </div>
    )
}

export default MainPagePurple