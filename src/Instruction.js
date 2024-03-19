import { React, Fragment } from "react";
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Instruction = () => {
    return(
        <Fragment>
            <div className="hello">
                <AutoTyping
                active // <boolean>
                textRef='Hello, Mr. Hunt' // <string>
                writeSpeed={1000} // <number>
                deleteSpeed={150}
                delayToWrite={1200} // <number> // <number>
                delayToDelete={500000} // <number>
                />
                <BlinkCursor
                active // <boolean>
                blinkSpeed={500} // <number>
                />
            </div>
            <br></br>
            <AutoTyping
            active // <boolean>
            textRef='Your mission, should you accept to choose it, is to get the details of a programmer, by any means.' // <string>
            writeSpeed={150} // <number>
            deleteSpeed={150} // <number>
            delayToWrite={3300} // <number>
            delayToDelete={500000} // <number>
            />
            <BlinkCursor
            active // <boolean>
            blinkSpeed={500} // <number>
            />
        </Fragment>
    )
}

export default Instruction;