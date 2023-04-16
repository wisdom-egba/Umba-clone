import React from "react"
import Accordion from "./Accordion"
import { data } from "./data"
const BisQuestion = () => {
  return (
    <>
      <div className="w-full bg-[white] pt-[50px] md:pt-[100px]">
        <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
          <div className="w-full grid text-center pt-12">
            <h className="text-[40px] md:text-[54px] leading-tight">
              Frequently asked questions
            </h>
            <p className="text-lg py-3">Everything you need to know</p>
          </div>
          <div>
            {data.map((item, id) => {
              const { question, answer } = item
              return (
                <div key={id}>
                  <Accordion question={question} answer={answer} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BisQuestion
