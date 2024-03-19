import { React, Fragment, useState } from "react";
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import './welcome.css'
import Back from './back.mp4'
import CountDown from "./CountDown";
const AllTheBest = () => {
    const [counting, setCounting] = useState(false);
    setTimeout(() => {
        setCounting(true);
    }, 5300);
    return(
        <Fragment>  
            <video autoplay = '' muted loop id="myVideo">
                <source src={Back} type="video/mp4" />
            </video>
            <div className="confirmMainDiv allbestDiv">
            <div className="screen">
                <div className="all_the_best">
                    <AutoTyping
                    active // <boolean>
                    textRef='All The Best Mr. Hunt...' // <string>
                    writeSpeed={1000} // <number>
                    deleteSpeed={150}
                    delayToWrite={0} // <number> // <number>
                    delayToDelete={500000} // <number>
                    />
                    <BlinkCursor
                    active // <boolean>
                    blinkSpeed={500} // <number>
                    />
                </div>
                <br></br>
                <div className="destroyed">
                    <AutoTyping
                    active // <boolean>
                    textRef='These message will get destroyed in 3 seconds' // <string>
                    writeSpeed={150} // <number>
                    deleteSpeed={150} // <number>
                    delayToWrite={2300} // <number>
                    delayToDelete={500000} // <number>
                    />
                    <BlinkCursor
                    active // <boolean>
                    blinkSpeed={500} // <number>
                    />
                </div>
                <div className="count_down">
                    { counting && <CountDown /> }
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AllTheBest;