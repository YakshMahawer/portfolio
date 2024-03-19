import { React, Fragment, useState } from "react";
import Confirm from './Confirm'
import Welcome from "./Welcome";
import WelcomeAudio from './welcometoimf.mp3'
import Portfolio from "./Portfolio";
import AllTheBest from "./AllTheBest";
import AllTheBestAudio from './getdestroyed.mp3'
import Boom from './explosion.webm'

const BeforeAccept = () => {
    const [active, setActive] = useState('Confirm');
    function PlayAudio(){
        setActive('Welcome');
        document.getElementsByClassName('audio')[0].play();
        document.getElementsByClassName('iAmEthanButtonDiv')[0].style.visibility = 'hidden';
        document.getElementsByClassName('aacceptMissionButton')[0].style.display = 'block';
    }
    function playVideo(){
        setActive('AllTheBest');
        document.getElementsByClassName('allbest')[0].play();
        document.getElementsByClassName('aacceptMissionButton')[0].style.display = 'none';
            setTimeout(() => {
                document.getElementsByClassName('explosives')[0].style.display = 'block';
                document.getElementsByClassName('explosives')[0].play();
                setTimeout(()=> {
                   setActive('Portfolio');
                }, 2600);
            }, 8250);
    }
    console.log(active);
    return(
        <Fragment>
            <div className="audioDiv"><audio src={WelcomeAudio} className="audio"></audio></div>
            <div className="audioDiv"><audio src={AllTheBestAudio} className="audio allbest"></audio></div>
            {active === 'Confirm' && <Confirm />}
            {active === 'Welcome' && <Welcome />}
            {active === 'AllTheBest' && <AllTheBest />}
            {active === 'Portfolio' && <Portfolio />}
            <div className="iAmEthanButtonDiv">
                <button className="iAmEthanButton" onClick={PlayAudio}>I 'M ETHAN HUNT</button>
            </div>
            <div className="aacceptMissionButton">
                <button className="iAmEthanButton acceptButton" onClick={playVideo}>ACCEPT MISSION</button>
            </div>
            <video muted className="explosives">
                <source src={Boom} type="video/mp4"/>
            </video>
        </Fragment>
    )
}

export default BeforeAccept;