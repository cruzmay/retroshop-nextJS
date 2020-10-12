import React from "react"
import Link from "next/link"
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Footer = () => (
   <footer className="footer">
       <div className="footer__subscription">
           <div className="footer__subscription__invitation">
                <img src="/images/bobafett.png"/>
                <div>
                    <h2>MAY RETRO STORE BE WITH YOU!</h2>
                    <h4>SUBCRIBE TO OUR NEWSLETTER</h4>
                </div>
           </div>
           <div className="footer__subscription__form">
               <div className="footer__subscription__input">
                <input type="email" placeholder="SUBCRIBE ME PLEASE!"/>
                <button type="submit">SEND</button>
               </div>
                <p>SEE OUR <span><Link href="/"><a>PRIVACY POLICE</a></Link></span></p>
           </div>
       </div>
       <div className="footer__links">
            <div><img src="/images/retro-logo.png"/></div>
            <div>
                <h3>SECTIONS</h3>
                <Link href="/"><a>CLOTH</a></Link>
                <Link href="/"><a>TOYS</a></Link>
                <Link href="/"><a>VIDEOGAMES</a></Link>
                <Link href="/"><a>GIFTS</a></Link>
            </div>
            <div>
                <h3>HELP</h3>
                <Link href="/"><a>CONTACT</a></Link>
                <Link href="/"><a>CHAT WITH US</a></Link>
                <Link href="/"><a>DEVOLUTIONS</a></Link>
                <Link href="/"><a>SHIPPING STATUS</a></Link>
            </div>
            <div>
                <h3>ABOUT RETROSHOP</h3>
                <Link href="/"><a>WHO WE ARE</a></Link>
                <Link href="/"><a>OUR STORY</a></Link>
            </div>
            <div>
                FOLLOW US 
                    <span><Link href="/"><a><button><FaFacebookSquare/></button></a></Link></span>
                    <span><Link href="/"><a><button><GrInstagram/></button></a></Link></span>
            </div>
       </div>
   </footer>
)

export default Footer