import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div >
            <div className={style.header.content}>
                <h1  className={style.title}>Where will your next trip be?</h1>
                <div className={style.header.overlay}>
                <Link to='/home'>
                    <button className={style.btn} >click here!</button>
                </Link>
                </div>
            </div>
            <div className={style.bkg}></div>

        </div>
        
    )
}