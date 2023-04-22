import React from "react"
import message from "../../assets/img-icon.png"
const PressContact = () => {
  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto bg-white md:mt-20 rounded-xl shadow-lg">
      <div className="mx-8 md:w-[85%] md:grid grid-cols-2 place-items-center">
        <div className=" md:w-[50%] md:ml-52">
          <h1 className="md:text-4xl md:py-5 ">Get in touch</h1>
          <p className="font-semibold">
            For media analyst and speaking inquiries, please send an email to
          </p>
          <a className="text-blue-600 font-bold" href="press@umba.com">
            press@umba.com
          </a>
        </div>
        <div className="hidden md:visible md:w-[40%] md:mr-40 ">
          <img src={message} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PressContact
