import {Link ,useLocation} from "react-router-dom"

import { useState } from "react"

import Sidebar from "./Sidebar"

import logo from "../assets/restaurant.png"

import { faHome , faFire , faList , faUserPlus , faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar(){
    const [showSidebar , setShowSidebar] =useState(false)
    const location=useLocation()
    const links = [
        {
            name:"Home",
            path:"/",
            icon : faHome
        },
        {
            name:"Popular",
            path:"/Popular",
            icon :faFire
        },
        {
            name:"Categories",
            path:"/Categories",
            icon : faList
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
        <div className="navbar container">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="nav-links">
                {links.map(link=> (
                    <Link className={location.pathname===link.path ? "active" : "" }  to={link.path} href="#!" key={link.name}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="nav-icons">
                <Link href="#!" to="/Signup"><FontAwesomeIcon icon={faUserPlus} /></Link>
                <Link href="#!" to="/SignIn"><FontAwesomeIcon icon={faRightToBracket} /></Link>
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    )
}