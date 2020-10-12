import React from "react";
import {GoSearch} from "react-icons/go"
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"

const MenuIcons = ({icon1, icon2, icon3 }) => (
    <div className="header__icons">
            <div>
               <button><GoSearch/></button><span>{icon1}</span> 
            </div>
            <div>
               <button><AiOutlineUser/></button><span>{icon2}</span> 
            </div>
            <div>
               <button><HiOutlineShoppingBag/></button><span>{icon3}</span> 
            </div>  
    </div>
)

export default MenuIcons