import React from "react";
import { useState } from "react";
import "./contact.css"

const RateUs = () => {
    const [star, setStar] = useState(0);
    const [activate, setActivate] = useState(true);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const[saved, setSaved] = useState(false);
    function star_plus(count){
        setActivate(false);
        if(count === 1){
            setOne(true);
            setTwo(false);
            setThree(false);
            setFour(false);
            setFive(false);
        }
        else if(count === 2){
            setOne(true);
            setTwo(true);
            setThree(false);
            setFour(false);
            setFive(false);
        }
        else if(count === 3){
            setOne(true);
            setTwo(true);
            setThree(true);
            setFour(false);
            setFive(false);
        }
        else if(count === 4){
            setOne(true);
            setTwo(true);
            setThree(true);
            setFour(true);
            setFive(false);
        }
        else if(count === 5){
            setOne(true);
            setTwo(true);
            setThree(true);
            setFour(true);
            setFive(true);
        }
        setStar(count);
    }
    function saving(){
        localStorage.setItem('rating', star);
        setSaved(true);
    }
    return(
    <div className="rating">
        <div className="rate_me_text">Rate My PortFolio</div>
        <button className={one? 'yellow': null} id='1star' onClick={() => {star_plus(1)}}><i class="fa-solid fa-star" ></i></button>
        <button className={two? 'yellow': null} id='2star' onClick={() => {star_plus(2)}}><i class="fa-solid fa-star"></i></button>
        <button className={three? 'yellow': null} id='3star' onClick={() => {star_plus(3)}}><i class="fa-solid fa-star"></i></button>
        <button className={four? 'yellow': null} id='4star' onClick={() => {star_plus(4)}}><i class="fa-solid fa-star"></i></button>
        <button className={five? 'yellow': null} id='5star' onClick={() => {star_plus(5)}}><i class="fa-solid fa-star"></i></button>

        {
            saved? <div className="saved"><i class="fa-solid fa-circle-check"></i> Saved</div> : <div className="done_div"><button className='done' disabled={activate} onClick={() => {saving()}}>DONE</button></div>
        }
    </div>
    )
}

export default RateUs;