import React from "react"
import Link from "next/link"

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
       <div className="footer__links"></div>
   </footer>
)

export default Footer