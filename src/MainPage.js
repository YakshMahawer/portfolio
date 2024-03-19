import BeforeAccept from './BeforeAccept'
import React from 'react'
import { useState } from 'react';
import Portfolio from './Portfolio';

const MainPage = () => {
    if(sessionStorage.getItem('userState') == "" || sessionStorage.getItem('userState') == null){
        sessionStorage.setItem("userState", "Welcome");
    }
    const [state, changeState] = useState(sessionStorage.getItem('userState'));
    console.log(state);
    return(
        <div className="mainPage">
            <div className="information">Dont't Worry, This is <span>Yaksh</span>'s Portfolio But Mission Impossible Style</div>
           {state == "Welcome"  && <BeforeAccept/>}
           {state == "Portfolio"  && <Portfolio/>}
        </div>
    )
}

export default MainPage;