import React from "react"
import "./aboutMe.css"
import Tom from "./tombabu.png"

const AboutMe = () => {
    function changeButton(){
        setTimeout(() => {
            document.getElementsByClassName("contact_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("skills_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("education_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("about_me_button")[0].classList.add("selected_button");
            document.getElementsByClassName("projects_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("achievement_button")[0].classList.remove("selected_button");
            }, 5);
    }
    changeButton();
    return(
        <div className="about_me">
            <div className="my_image">
                <img src={Tom} alt="" />
            </div>
            <div className="description">
                <div className="hi">Ciao, I am Yaksh !</div>
                <div className="desc">I know how to design, code and develop websites and apps. I know <span id="prog"> 7 Programming Languages</span> and worked with almost <span id="frame">9 Popular Frameworks</span> of JavaScript and Python. I am a big fan of  &nbsp; <span id="crea">  CREATIVITY</span> . So, I love Movies &#127916; , Music &#127927; and ofcourse, <span id="tech">Technology </span> &#128518;</div>
                <div className="slide_for_more">Slide &#128073; To Know More About Me ... </div>
                <div className="thanks_for_coming">And Thank You For Visiting My Portfolio</div>
            </div>
        </div>
    )
}

export default AboutMe;