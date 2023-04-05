import React from "react"
import umba from "../assets/logo2.png"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <div className=" mt-[180px] w-full bg-[#e0eaf6] md:py-16">
      <div className=" ml-5 max-w-[1370px] md:max-w-[77%] lg:max-w-[55%] m-auto grid md:grid-cols-5 grid-col-6 pt-12  ">
        <div className="flex flex-col mr-16 ">
          <img className="w-[25%] md:w-[50%]" src={umba} alt="" />
        </div>
        <div className="mr-16 mt-4">
          <h1 className="font-bold mb-3 md:mb-6">Company</h1>
          <ul>
            <li className="mb-2 md:mb-3">
              <a href="#"></a>Home
            </li>
            <li className="mb-2 md:mb-3">
              <a href="#"></a>Careers
            </li>
            <li className="mb-2 md:mb-3">
              <a href="#"></a>Contact Us
            </li>
          </ul>
        </div>
        <div className=" mr-[70px] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Locations</h1>
          <ul>
            <li className="md:mb-3 mb-2">
              <a href="#"></a>Nigeria
            </li>
            <li className="md:mb-3 mb-2">
              <a href="#"></a>Kenya
            </li>
          </ul>
        </div>
        <div className="w-[100%] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Transparency</h1>
          <ul>
            <li className="mb-3">
              <a href="#"></a>Privacy Policy
            </li>
            <li className="mb-3">
              <a href="#"></a>General Terms of Service
            </li>
          </ul>
        </div>
        <div className="md:ml-[45px] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Socials</h1>
          <ul>
            <div className="mb-3">
              <a className="flex gap-3  items-center" href="">
                <AiOutlineTwitter size={20} />
                Twitter
              </a>
            </div>
            <div className="mb-3">
              <a className="flex gap-3  items-center" href="">
                <BsFacebook size={20} />
                Facebook
              </a>
            </div>
            <div className="mb-3">
              <a className="flex gap-3 items-center" href="">
                <FaInstagram size={20} />
                Instagram
              </a>
            </div>
            <div className="mb-3">
              <a className="flex gap-3 items-center" href="">
                <BsLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center pt-20 pb-2">
        Copyright @ 2023 Umba. All rights reserved
      </div>
    </div>
  )
}

export default Footer
