import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDown = () => {
    return(
        <CountdownCircleTimer
        isPlaying
        duration={3}
        colors={['#9ACD32', '#FFFF00', '#FFA500', '#FF0000']}
        colorsTime={[3,2,1, 0]}
    >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
    )
}

export default CountDown