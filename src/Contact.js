import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import RateUs from "./RateUs"
import RatedYou from "./RatedYou"
import { useEffect } from 'react';

const Contact = () => {
    const [sent, setSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(()=>{
            setSent(false);
        }, 2000);
        emailjs.sendForm('service_pq80wbm', 'template_b4match', form.current, 'oL12hjuHXCHTtTQvM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    function changeButton(){
        setTimeout(() => {
            document.getElementsByClassName('explosives')[0].classList.add("gaayab");
            document.getElementsByClassName("contact_button")[0].classList.add("selected_button");
            document.getElementsByClassName("skills_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("education_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("about_me_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("projects_button")[0].classList.remove("selected_button");
            document.getElementsByClassName("achievement_button")[0].classList.remove("selected_button");
            }, 5);
    }
    changeButton();
    var gave = true;
    if(localStorage.getItem("rating") != null){
        gave = false;
    }
    return(
        <div className="contact_div">
            <div className="direct_contact">
            {sent? <div className="message_sent">Message Sent</div> : ''}
                <div className="rating_div">
                {
                    gave? <RateUs />: <RatedYou />
                }
                </div>
                <div className="sendMeMail">
                    <div className="anysug">Wanna Say Something:</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                        </div>
                        <div>
                        <label>Email</label>
                        <input type="email" name="user_email" required/>
                        </div>
                        <div>
                        <label>Message</label>
                        <textarea name="message" required/>
                        </div>
                        <input type="submit" value="Send" className='send' />
                    </form>
                </div>
            </div>
            <div className="indirect_contact">
                <div className="linkedin">
                    <div className="chead"><i class="fa-brands fa-linkedin"></i> Check On LinkedIn : </div>
                    <div className="clink"><a href="">https://www.linkedin.com/in/yaksh-mahawer-042158202/</a></div>
                </div>
                <div className="github">
                    <div className="chead"><i class="fa-brands fa-github"></i> Checkout Github Profile : </div>
                    <div className="clink"><a href="">https://github.com/YakshMahawer</a></div>
                </div>
                <div className="mail">
                    <div className="chead"><i class="fa-solid fa-envelope"></i> Write a mail on : </div>
                    <div className="clink"><a href="">yaksh.mahawer@gmail.com</a></div>
                </div>
                <div className="phone">
                    <div className="chead"><i class="fa-solid fa-phone"></i> Call or WhatsApp Me : </div>
                    <div className="clink"><a href="">7016086927</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;