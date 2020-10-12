import React, { useEffect} from "react";
import Link from 'next/link'
import {AiOutlineMenu} from "react-icons/ai"
import {RiCloseLine} from "react-icons/ri"
import MenuIcons from "./MenuIcons"
import MenuList from "./MenuList"
import "./styles/header.scss"

const Header = () => {
    useEffect(() => {
        const burguer = document.getElementById('burguer')
        const movil = document.getElementById('movil')
        const closeMenu = document.getElementById('closeMenu')

        burguer.addEventListener("click",() =>{
            if(movil.style.left === "-350px") {
                movil.style.left = "0"
            } else {
                movil.style.left = "-350px"
            }
        })
        closeMenu.addEventListener("click", ()=>{
            if(movil.style.left === "0px") {
                movil.style.left = "-350px"
            } else {
                movil.style.left = "0px"
            }
        })
    })
    return (
        <>
        <header className="header">
        <button className="header__movile-menu" id="burguer"><AiOutlineMenu/></button>
        <figure className="header__logo">
            <Link href="/">
                <a><img src="/images/retro-logo.png" alt="logo retroshop"/></a>
            </Link>
        </figure>
            <nav className="header__nav">
            <ul id="movil" style={{left:"-350px"}}>
                <div className="close" id="closeMenu"><RiCloseLine/></div>
                <MenuList/>
            </ul>
        </nav>
        <div className="DesktopIcons">
            <MenuIcons/>
        </div>  
    </header>
    </>
    )
}

export default Header;

