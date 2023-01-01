import React from 'react'
import './css/StudioDetail.css';
import './css/Utils.css';
import bg1 from './image/bg1.svg';
import bg2 from './image/bg2.svg';
import busStart from './image/bus-start.svg';
import busEmail from './image/bus-email.svg';
import busStat from './image/bus-stat.svg';
import m2 from './image/m2.png';

import { Link } from 'react-router-dom';

function StudioDetail() {
    return (
        <div>
            <div className="st-banner">
                <span className="st-bn-title">
                    Officiis quam harum
                </span>
                <span>
                    Odio enim dolor sit dictum scelerisque. Pharetra ut volutpat in nisl pellentesque. Quisque integer urna quis aliquet ut nunc pellentesque gravida. Duis netus gravida senectus amet nunc. Turpis eleifend rhoncus tellus, arcu sed sit fermentum iaculis suspendisse.
                </span>
            </div>
            <div className="about-us-sec">
                <img src={bg1} alt="bg1" />
                <div className="about-text">
                    <span className="ab-txt">
                        About Us
                    </span>
                    <span>Aliquam, in parturient at vitae, rutrum fringilla duis. Libero odio aliquam diam nisl nec vitae. At sit ac ornare vestibulum ut. Suspendisse dictumst morbi tempus cursus. Eget cras lacinia consectetur aliquam libero tortor nunc a orci. Volutpat consequat, cras urna augue maecenas cursus. Aenean mattis semper vestibulum, fermentum. Turpis proin habitasse mattis convallis. Sit aliquam urna, ut sed mauris. Massa ultrices amet, netus hac. Lectus est vel massa sollicitudin donec. Lobortis nullam diam feugiat dignissim quis id sit facilisis. Aliquam, in parturient at vitae, rutrum fringilla duis. Libero odio aliquam diam nisl nec vitae. At sit ac ornare vestibulum ut. Suspendisse dictumst morbi tempus cursus. Eget cras lacinia consectetur aliquam libero tortor nunc a orci. Volutpat consequat, cras urna augue maecenas cursus. Aenean mattis semper vestibulum, fermentum. Turpis proin habitasse mattis </span>
                </div>
            </div>

            <div className="our-service">
                <span className="service-title">
                    Our Services
                </span>
                <div className="service-div">
                    <div className="ser-d1">
                        <div className="purple-circle">
                            <img src={busStart} alt="business-startup" />
                        </div>
                        <p>sed mauris. Massa ultrices amet, netus hac.</p>
                    </div>
                    <div className="ser-d1">
                        <div className="purple-circle">
                            <img src={busEmail} alt="business-email" />
                        </div>
                        <p>sed mauris. Massa ultrices amet, netus hac.</p>
                    </div>
                    <div className="ser-d1">
                        <div className="purple-circle">
                            <img src={busStat} alt="business-Strats" />
                        </div>
                        <p>sed mauris. Massa ultrices amet, netus hac.</p>
                    </div>
                </div>
            </div>

            <div className="post-job">
                <div className="post-head">
                    <span>Posted Jobs</span>
                    <Link to="/download-section"><button className="apply">Apply</button></Link>
                </div>
                <div className="post-job-divs">
                    <Link to="/download-section"><div className="post-job1">
                        <img src={m2} alt="m2" />
                        <span>recusandae omnis eos</span>
                        <span className='position'>Female Actor</span>
                    </div></Link>
                    <Link to="/download-section"><div className="post-job1">
                        <img src={m2} alt="m2" />
                        <span>recusandae omnis eos</span>
                        <span className='position'>Female Actor</span>
                    </div></Link>
                    <Link to="/download-section"><div className="post-job1">
                        <img src={m2} alt="m2" />
                        <span>recusandae omnis eos</span>
                        <span className='position'>Female Actor</span>
                    </div></Link>

                </div>
            </div>

            <div className="purple-area-std">
                <p>Augue mi ac faucibus nulla ridiculus aliquam tristique sagittis, a. Magna est accumsan eget tristique odio elementum fames quis mus. Scelerisque nunc placerat lacinia pulvinar bibendum est. Amet id elementum cras tincidunt elit duis diam eu vitae. Interdum nulla a blandit mi, sed ultrices dictumst.</p>
                <img src={bg2} alt="bg2" />
            </div>

            <footer>
                <p>Copyright &copy; 2022 All rights reserved</p>
            </footer>
        </div>
    )
}

export default StudioDetail
