import React from "react"
import "./project.css"
import Vaadhya from "./headerlogo.png"
import SG from "./official_logo.png"
import Enigma from "./enigmalogo.png"

const Projects = () => {
    function changeButton(){
        setTimeout(() => {
            document.getElementsByClassName("contact_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("skills_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("education_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("about_me_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("projects_button")[0].classList.add("selected_button");
            document.getElementsByClassName("achievement_button")[0].classList.remove("selected_button");
            }, 5);
    }
    changeButton();
    return(
        <div className="project_div">
            <div className="vaadhya card">
                <div className="plogo">
                    <img src={Vaadhya} alt="" />
                </div>
                <div className="ptitle">Music Streaming Website</div>
                <div className="pdesc">With recommendation system using Bag Of Words Model and Cashfree Payments Gateway for payments to get lifetime ad-free music and many other features.</div>
                <div className="pused"><span>Tech Used -</span> HTML5, CSS3, JS, NodeJS, ExpressJS, EJS, Python, YouTube API, own RestFul API and MongoDB as DataBase</div>
                <div className="pyoutube"><a href="">Quick Demo on YouTube <i class="fa-brands fa-youtube"></i></a></div>
                <div className="pgithub"><a href="">Check On GitHub <i class="fa-brands fa-github"></i></a></div>
            </div>
            <div className="sg card">
                <div className="plogo">
                    <img src={SG} alt="" />
                </div>
                <div className="ptitle">Complain Website For Citizens and Cameras</div>
                <div className="pdesc">Here users can write and track complain to thier respective Municipal Co-operation. Complains are first verified by an intermediator. Using YOLO Algo street cams can also detect garbage and auto-complain and much more...</div>
                <div className="pused"><span>Tech Used -</span> HTML5, CSS3, JS, NodeJS, ExpressJS, HBS, Python, Arduino, Twilio, OpenCV and MongoDB as DataBase</div>
                <div className="pyoutube"><a href="">Quick Demo on YouTube <i class="fa-brands fa-youtube"></i></a></div>
                <div className="pgithub"><a href="">Check On GitHub <i class="fa-brands fa-github"></i></a></div>
            </div>
            <div className="enigma card">
                <div className="plogo">
                    <img src={Enigma} alt="" />
                </div>
                <div className="ptitle">Menu and Ordering Online</div>
                <div className="pdesc">A website for User where he/she can watch, calculate, order food for restaurant by scanning QR Code. And an App for Restaurant Owner where he/she can manupulate the menu.</div>
                <div className="pused"><span>Tech Used -</span> HTML5, CSS3, ReactJS, Flutter and FireBase as DataBase</div>
                <div className="pyoutube"><a href="">Quick Demo on YouTube <i class="fa-brands fa-youtube"></i></a></div>
                <div className="pgithub"><a href="">Check On GitHub <i class="fa-brands fa-github"></i></a></div>
            </div>
        </div>
    )
}

export default Projects;