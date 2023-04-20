import React from "react"
import umba from "../assets/logo2.png"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className=" mt-[180px] w-full bg-[#e0eaf6] md:py-16 m-auto">
      <div className=" max-w-[370px] md:max-w-[77%] lg:max-w-[55%] m-auto grid md:grid-cols-5 pt-12  ">
        <div className="flex flex-col mr-16 ">
          <img className="w-[25%] md:w-[50%]" src={umba} alt="" />
        </div>
        <div className="mr-16 mt-4">
          <h1 className="font-bold mb-3 md:mb-6">Company</h1>
          <div className="flex flex-col">
            <Link to="/" className="md:mb-3 mb-2 hover:underline">
              Home
            </Link>
            <Link to="/career" className="md:mb-3 mb-2 hover:underline">
              Career
            </Link>
            <Link to="/contact" className="md:mb-3 mb-2 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className=" mr-[70px] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Locations</h1>
          <ul>
            <li className="md:mb-3 mb-2">
              <a className="hover:underline" href="#"></a>Nigeria
            </li>
            <li className="md:mb-3 mb-2">
              <a className="hover:underline" href="#"></a>Kenya
            </li>
          </ul>
        </div>
        <div className="w-[100%] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Transparency</h1>
          <ul>
            <li className="mb-3">
              <a className="hover:underline" href="#"></a>Privacy Policy
            </li>
            <li className="mb-3">
              <a className="hover:underline" href="#"></a>General Terms of
              Service
            </li>
          </ul>
        </div>
        <div className="md:ml-[45px] mt-5">
          <h1 className="font-bold mb-3 md:mb-6">Socials</h1>
          <ul>
            <div className="mb-3">
              <a
                className="flex gap-3  items-center hover:text-[#3d7cc9] hover:underline"
                href="https://twitter.com/UmbaMobile"
              >
                <AiOutlineTwitter size={20} />
                Twitter
              </a>
            </div>
            <div className="mb-3">
              <a
                className="flex gap-3  items-center hover:text-[#3d7cc9] hover:underline"
                href="https://web.facebook.com/umbamobile/"
              >
                <BsFacebook size={20} />
                Facebook
              </a>
            </div>
            <div className="mb-3">
              <a
                className="flex gap-3 items-center hover:text-[#d14731] hover:underline"
                href="https://www.instagram.com/UmbaMobile/"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
            </div>
            <div className="mb-3">
              <a
                className="flex gap-3 items-center hover:text-[#3d7cc9] hover:underline"
                href="https://www.linkedin.com/company/umbamobile/"
              >
                <BsLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <p className="pt- text-[15px] leading-tight">
          Copyright @ 2023 Umba. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
