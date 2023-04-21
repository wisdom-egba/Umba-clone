import React from "react"
import { pressData } from "./PressData"
import AccordionCard from "./AccordionCard"

const PressAccordion = () => {
  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto bg-white md:mt-20">
      <div className=" bg-[white] pt-[50px] md:pt-[100px] items-start">
        <div className="max-w-[340px] md:max-w-[83%] lg:max-w-[80%] py-10 grid items-start mx-7 ">
          <div className="mx-7 grid text-start pt-12">
            <h className="text-[40px] md:text-[40px] mb-11 lg:m-auto leading-tight">
              Who are we?
            </h>
          </div>
          <div>
            {pressData.map((item, id) => {
              const { title, description } = item
              return (
                <div key={id}>
                  <AccordionCard title={title} description={description} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressAccordion
