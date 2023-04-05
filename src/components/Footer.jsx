import React from "react"
import umba from "../assets/logo2.png"
const Footer = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-col-6 py-10 md:py-10">
        <div>
          <img className="w-[50%]" src={umba} alt="" />
        </div>
        <div>
          <h1>Company</h1>
          <ul>
            <li>
              <a href="#"></a>Home
            </li>
            <li>
              <a href="#"></a>Careers
            </li>
            <li>
              <a href="#"></a>Contact Us
            </li>
          </ul>
        </div>
        <div>
          <h1>Location</h1>
          <ul>
            <li>
              <a href="#"></a>Nigeria
            </li>
            <li>
              <a href="#"></a>Kenya
            </li>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul>
            <li>
              <a href="#"></a>Privacy Policy
            </li>
            <li>
              <a href="#"></a>General Terms of Service
            </li>
          </ul>
        </div>
        <div>
          <h1>Socials</h1>
          <ul>
            <div>
              <li>
                <a href="">Twitter</a>
              </li>
            </div>
            <div>
              <li>
                <a href="">Facebook</a>
              </li>
            </div>
            <div>
              <li>
                <a href="">Instagram</a>
              </li>
            </div>
            <div>
              <li>
                <a href="">LinkedIn</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
