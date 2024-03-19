import React from "react";
import { useState } from "react";
import "./contact.css"



const RatedYou = () => {
    const arr = ['one', 'two', 'three', 'four', 'five'];
    for(var i = localStorage.getItem('rating'); i < 5; i++){
        arr.pop();
    }

    return(
        <div className="rated">
            <div className="after_stars">
            {
                arr.map(arr=>(
                    <div className="got_stars"><i class="fa-solid fa-star rated_star" ></i></div>
                ))
            }
            </div>
            <div className="thank_you_rating">
                <div className="rthanks">You Gave Us {localStorage.getItem('rating')} Stars</div>
            </div>
        </div>
    )
}

export default RatedYou;