import { AnimatePresence, color, motion } from "framer-motion"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import React from "react"
import { useState } from "react"
const BisQuestion = () => {
  const [toggle, setToggle] = useState(false)

  console.log(toggle)
  return (
    <>
      <div className="w-full bg-[white] pt-[50px] md:pt-[100px]">
        <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
          <div className="w-full grid text-center">
            <h className="text-[40px] md:text-[54px] leading-tight">
              Frequently asked questions
            </h>
            <p className="text-lg">Everything you need to know</p>
          </div>
          <div className="mr-7 ml-7 border-b border-gray-200 ">
            <div
              className="pt-6 cursor-pointer flex justify-between "
              onClick={() => setToggle(!toggle)}
            >
              <h1 className="font-semibold text-lg pb-7">Who is Umba?</h1>
              <div className="text-red">
                {toggle ? (
                  <AiOutlineMinusCircle size={28} />
                ) : (
                  <AiOutlinePlusCircle size={28} />
                )}
              </div>
            </div>
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-clip"
                >
                  <p className=" pb-7 text-[17px]">
                    Umba is a digital bank operating in Kenya and Nigeria
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default BisQuestion
