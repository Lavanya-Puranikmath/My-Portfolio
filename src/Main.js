import React,{Component} from "react";
import {Route,NavLink,Link,HashRouter,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import{library} from '@fortawesome/fontawesome-svg-core';
import{
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
    
} from "@fortawesome/free-brands-svg-icons";


library.add(fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
    
    );


// in V6 we use Routes which has nested route and ***** we use element to go to tht page


class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
            <div >
                <Link className="logo" to="/">Lavanya Puranikmath</Link>

                </div>

                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
<Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/About" element={<About />} />
                <Route  path="/Contact" element={<Contact />} />


</Routes>

                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;