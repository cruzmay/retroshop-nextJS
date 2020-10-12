import React from "react"
import Link from 'next/link'
import MenuIcons from "./MenuIcons"
import {GoSearch} from "react-icons/go"
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"


const MenuList = () => (
<>
    <li><Link href="/"><a>Cloth</a></Link></li>
    <li><Link href="/"><a>Toys</a></Link></li>
    <li><Link href="/"><a>videogames</a></Link></li>
    <li><Link href="/"><a>gifts</a></Link></li>
    <div className="header__menuIconsMovil">
       <MenuIcons
       icon1 = "Search"
       icon2 = "log in"
       icon3 = "Cart"
       />
    </div>
</>
)

export default MenuList