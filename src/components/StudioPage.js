import React from 'react';
import StudioCard from './StudioCard';
import './css/StudioPage.css';
import './css/Utils.css';
import { Link } from 'react-router-dom';

function StudioPage() {
    return (
        <div className='studio-page'>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>
            <Link to="/studio-detail" ><StudioCard /></Link>


        </div>
    )
}

export default StudioPage