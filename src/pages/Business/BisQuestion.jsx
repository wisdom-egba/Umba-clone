import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const BisQuestion = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div className="w-full bg-[white] pt-[50px] md:pt-[100px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
        <div className="w-full grid text-center">
          <h className="text-[40px] md:text-[54px] leading-tight">
            Frequently asked questions
          </h>
          <p className="text-lg">Everything you need to know</p>
        </div>
        <div className="mr-7 ml-7 border-b border-gray-200">
          <div
            className="py-6 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <h1>Who is Umba</h1>
          </div>
          <div
            className={
              toggle
                ? "font-bold transition duration-500 py-4  "
                : "hidden duration-300 "
            }
          >
            <p>Umba is a digital bank operating in Kenya and Nigeria</p>
          </div>
          <div>{/* <FontAwesomeIcon icon="fal fa-plus-circle" /> */}</div>
        </div>
      </div>
    </div>
  )
}

export default BisQuestion
