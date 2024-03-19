import React from "react"
import "./education.css"

const Education = () => {
    function changeButton(){
        setTimeout(() => {
            document.getElementsByClassName("contact_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("skills_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("education_button")[0].classList.add("selected_button");
            document.getElementsByClassName("about_me_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("projects_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("achievement_button")[0].classList.remove("selected_button");
            }, 5); 
    }
    changeButton();
    return(
        <div className="education_div">
            <div className="eyears">
                <div className="eyear pyear">2021 - Present</div>
                <div className="eyear dyear">2017 - 2021</div>
                <div className="eyear cyear">2007 - 2017</div>
            </div>
            <div className="eprogress">
                <div className="eicon"><i class="fa-solid fa-circle-up"></i></div>
                <div className="ebar"></div>
                <div className="eicon"><i class="fa-solid fa-circle-check"></i></div>
                <div className="ebar"></div>
                <div className="eicon"><i class="fa-solid fa-circle-check"></i></div>
            </div>
            <div className="edetails">
                <div className="parul">
                    <div className="ename">Parul University, Vadodara, Gujarat</div>
                    <div className="degree esub">B.Tech in Computer Science and Engineering</div>
                    <div className="cgpa esub">CGPA : <span className="highl">8.88 / 10</span>  &#40; Upto 4th Semester &#41;</div>
                    <div className="taarif esub">10 / 10 Grade Points in 10 Subjects</div>
                </div>
                <div className="donbosco">
                    <div className="ename">Don Bosco High School, Vadodara, Gujarat</div>
                    <div className="hsc esub">Higher Secondary Certificate Examination &#40; HSC / 12th &#41; - <span className="highl">86.8 %</span> </div>
                    <div className="ssc esub">Secondary School Certificate Examination &#40; SSC / 10th &#41; - <span className="highl">88.0 %</span> </div>
                </div>
                <div className="carmel">
                    <div className="ename">Carmel Convent High School, Junagadh, Gujarat</div>
                </div>
            </div>
        </div>
    )
}

export default Education;