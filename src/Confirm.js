import { React, Fragment } from "react";
import './confirm.css'
import Back from './back.mp4'

const Confirm = () => {
    return(
        <Fragment>  
        <video autoplay = '' muted loop id="myVideo">
            <source src={Back} type="video/mp4" />
        </video>
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'></link>
        <div className="confirmMainDiv">
            <div className="confirmYourIdentityTextDiv">
                <div class="container">
                    <div class="glitch" data-text="CONFIRM YOUR IDENTITY">CONFIRM YOUR IDENTITY</div>
                    <div class="glow">CONFIRM YOUR IDENTITY</div>
                </div>
            </div>
            <div className="confirmIdentityContentDiv">
                <div className="glitchDiv">
                    <div className="audioInstruction">
                        <p className="audioInstructionText"><i class="fa-solid fa-volume-high"></i>  KEEP AUDIBLE VOLUME FOR BETTER EXPERIENCE</p>
                    </div>
                    <div className="pressButtonToConfirmDiv">
                        <p className="pressButtonToConfirmText">PRESS BELOW BUTTON TO CONFIRM YOUR IDENTITY</p>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Confirm;