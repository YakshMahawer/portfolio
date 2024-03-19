import { React, Fragment, useEffect } from "react";
import IMFLogo from './imflogo.png'
import {gsap} from 'gsap'
import Instruction from './Instruction.js'
import Back from './back.mp4'
import './welcome.css'
const Welcome = () => {
    useEffect(() => {
        gsap.to(".imfLogoImage", {rotateY:0, duration: 1.6});
        gsap.to(".impossibleText", {marginLeft:0, delay: 0.8, duration: 1});
        gsap.to(".missionText", {marginLeft:0, delay: 0.8, duration: 1});
        gsap.to(".screen", {y:-280, delay: 2.2, duration: 0.8});
        gsap.to(".forceText", {marginLeft:0, delay: 0.8, duration: 1});
        gsap.to(".welcomeContent", {opacity: 0, delay: 2.1, duration: 0.5});
        gsap.to(".aacceptMissionButton", {opacity:1, duration: 1.6, delay: 8.3});

    },[]);

    
    return(
        <Fragment>
            <video autoplay = '' muted loop id="myVideo">
                <source src={Back} type="video/mp4" />
            </video>
            <div className="confirmMainDiv welcomeMainDiv">
            <div className="screen">
                <div className="welcomeContent">
                    <img src={IMFLogo} alt="" className="imfLogoImage" srcset="" />
                    <div className="imfTextDiv">
                        <div className="impossible"><p className="impossibleText">IMPOSSIBLE</p></div>
                        <div className="mission"><p className="missionText">MISSION</p></div>
                        <div className="force"><p className="forceText">FORCE</p></div>
                    </div>
                </div>
                <div className="missionContent">
                    <Instruction />
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Welcome;