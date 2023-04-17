import React from "react"

const ContactCards = ({ title, btn, text }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg w-[300px] m-12 shadow-xl border border-transparent">
      <div className="my-5">
        <h1 className="text-[30px] font-bold text-[#3d7cc9]">{title}</h1>
      </div>
      <div className="m-3 mx-6 p-1">
        <p className="text-[22px] text-center">{text}</p>
      </div>
      <div className="m-10">
        <button className="bg-[#3d7cc9] hover:bg-[#0d3356] transition duration-900  md:bg-[#0d3356] md:hover:bg-[#21538f]   w-full m-auto px-6 py-2 text-white font-semibold text-lg">
          {btn}
        </button>
      </div>
    </div>
  )
}

export default ContactCards
