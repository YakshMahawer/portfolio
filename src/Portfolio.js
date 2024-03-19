import { React, Fragment } from "react";
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact"
import "./portfolio.css"
import PortBack  from "./portfolioback.jpg"
import { useState } from "react";

const Portfolio = () => {
    sessionStorage.setItem("userState", "Portfolio");
    const arr = ["AboutMe", "Skills", "Projects", "Education", "Contact"];
    const [icon, setButton] = useState("AboutMe");
    const [side, setSide] = useState("");
    const [count, setCount] = useState(0);
    const slide_left = () => {
        console.log(count);
        if(count === 0){
            setCount(5);
        }
        else{
            setCount(count-1);
        }
        console.log(count);
        setButton(arr[count]);
    }

    const slide_right = () => {
        console.log(count);
        if(count === 5){
            setCount(0);
        }
        else{
            setCount(count+1);
        }
        console.log(count);
        setButton(arr[count]);
    }
    return(
        <Fragment>  
            <div className="portfolio_main">
                <div className="portfolio_back"><img src={PortBack} alt="" srcset="" /></div>
                <div className="button_div">
                    <div className="buttons">
                        <div className="slide_left"><button className="slide_left_button" onClick={slide_left}><i class="fa-solid fa-left-long"></i></button></div>
                        <div className="about_me"><button className="about_me_button" onClick={() => setButton("AboutMe")}><i class="fa-solid fa-user-astronaut"></i></button></div>
                        <div className="skills"><button className="skills_button" onClick={() => setButton("Skills")}><i class="fa-solid fa-screwdriver-wrench"></i></button></div>
                        <div className="projects"><button className="projects_button" onClick={() => setButton("Projects")} ><i class="fa-solid fa-igloo"></i></button></div>
                        <div className="education"><button className="education_button" onClick={() => setButton("Education")}><i class="fa-solid fa-school"></i></button></div>
                        <div className="contact"><button className="contact_button" onClick={() => setButton("Contact")}><i class="fa-solid fa-phone"></i></button></div>
                        <div className="slide_right"><button className="slide_right_button" onClick={slide_right}><i class="fa-solid fa-right-long"></i></button></div>
                    </div>
                </div>
                <div className="button_content">
                {icon === 'AboutMe' && <AboutMe />}
                {icon === 'Skills' && <Skills />}
                {icon === 'Projects' && <Projects />}
                {icon === 'Education' && <Education />}
                {icon === 'Contact' && <Contact />}
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio;


//https://codepen.io/naraku3232/pen/MjQpdd