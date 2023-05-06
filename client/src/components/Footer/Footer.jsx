import React from 'react'
import "./Footer.scss";
import  Logo  from "../../img/Logo.png"
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with <b>SAFAR</b>
      </span>
    </footer>
  )
}

export default Footer