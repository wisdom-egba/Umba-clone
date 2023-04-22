import React from "react"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"

const PressCard = ({ content, title, img }) => {
  return (
    <div className="mb-8">
      <img className="rounded-[40px]" src={img} alt="" />
      <h1 className="my-7">{title}</h1>
      <p className="font-bold text-2xl w-[95%] md:w-full md:text-2xl my-5">
        {content}
      </p>
      <div className="flex items-center justify-center py-8">
        <button className="flex items-center gap-3 font-bold text-[#3d7cc9]">
          <BsFillArrowUpRightCircleFill
            size={22}
            style={{ color: "white", fill: "#3d7cc9" }}
          />
          READ MORE
        </button>
      </div>
    </div>
  )
}

export default PressCard
