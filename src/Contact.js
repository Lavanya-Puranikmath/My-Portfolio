import React,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Contact.css";

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <h2>Contact me</h2>
                <div className="bor"></div>
                <p> This is my Contact <a href=" ">lavanya31math@gamil.com</a></p>
                <p style={{marginBottom:"2rem"}}>You can contact using below Links</p>

                {/* <FontAwesomeIcon icon={["fa-solid fa-envelope"]} size="2x" />
              <a 
              href="https://twitter.com/home"
              style={{
                textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                margin:"0rem 2rem 0rem 0.5rem",
                textDecoration:"none",
                color:"white"
                }}
              >Twitter</a>  */}
               
               <div >
               <FontAwesomeIcon icon={["fab","linkedin"]} size="2x" />
              <a 
              href="https://www.linkedin.com/in/lavanya-puranikmath-171883224/"
              style={{
                textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                margin:"0rem 2rem 0rem 0.5rem",
                textDecoration:"none",
                color:"white"
                }}
                
              >Linkedin</a>

<FontAwesomeIcon icon={["fab","github"]} size="2x" />
              <a 
              href="https://github.com/Lavanya-Puranikmath/"
              style={{
                textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                margin:"0rem 2rem 0rem 0.5rem",
                textDecoration:"none",
                color:"white"
                }}
              >Github</a>
              </div>

              


            </div>
        )
    }
}

export default Contact;