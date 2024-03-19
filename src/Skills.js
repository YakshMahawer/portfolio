import React from "react"
import "./skills.css"

const Skills = () => {
    function changeButton(){
        setTimeout(() => {
            document.getElementsByClassName("contact_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("skills_button")[0].classList.add("selected_button");
            document.getElementsByClassName("education_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("about_me_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("projects_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("achievement_button")[0].classList.remove("selected_button");
            }, 5);
    }
    changeButton();
    return(
        <div className="skills_page">
        <div className="guide_text">
            <span className="gtext">BASIC</span>
            <span className="gtext">INTERMEDIATE</span>
            <span className="gtext">EXPERT</span>
        </div>
        <div className="progress_guide">
             <div className="progress guide">
                <div className="progress-bar basic guide_items"></div>
                <div className="progress-bar intermediate guide_items"></div>
                <div className="progress-bar expert guide_items"></div>
            </div>
        </div>
        <div className="skills_div">
            <div className="languages_i_know">
                <div className="languages_i_know_head shead">Languages I Know - </div>
                <div className="languages">
                    <div className="first_half">
                        <div className="mern">
                        <div className="lang_name">  MERN Stack </div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="html">
                        <div className="lang_name">HTML</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="css">
                        <div className="lang_name">CSS</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="javascript">
                        <div className="lang_name">JavaScript</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="python">
                        <div className="lang_name">Python &#x5B; Numpy, Pandas, OpenCV, etc  &#x5D;</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="second_half">
                        <div className="dart">
                        <div className="lang_name">Dart &#x5B; Flutter &#x5D;</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="c">
                        <div className="lang_name"> C </div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar basic"></div>
                        </div>
                        </div>
                    </div>
                    <div className="cpp">
                        <div className="lang_name"> C++ </div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar intermediate"></div>
                        </div>
                        </div>
                    </div>
                    <div className="java">
                        <div className="lang_name">Java</div>
                        <div className="lang_progress">
                        <div className="progress">
                            <div className="progress-bar basic"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="other_skills">
                <div className="tools">
                    <div className="tools_head shead">Tools - </div>
                    <div className="sname">Git | Visual Studio | Android Studio</div>
                </div>
                <div className="databases">
                    <div className="databeses_head shead">Databases - </div>
                    <div className="sname">MongoDB | FireBase | SQL</div>
                </div>
                <div className="other_skills">
                    <div className="other_skills_head shead">Other Skills - </div>
                    <div className="extras sname">Content / Story Writing | Video Editing</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills;