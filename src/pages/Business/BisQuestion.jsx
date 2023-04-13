import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BisQuestion = () => {
  return (
    <div className="w-full bg-[white] pt-[50px] md:pt-[100px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
        <div className="w-full grid text-center">
          <h className="text-[40px] leading-tight md:text-[54px] leading-tight">
            Frequently asked questions
          </h>
          <p className="text-lg">Everything you need to know</p>
        </div>
        <div>
          <div>
            <h1>Who is Umba</h1>
          </div>
          <div>
            <FontAwesomeIcon icon="fal fa-plus-circle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BisQuestion
