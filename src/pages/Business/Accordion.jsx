import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
const Accordion = ({ id, question, answer }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="mr-7 ml-7 border-b border-gray-200 ">
      <div
        className="pt-6 cursor-pointer flex justify-between "
        onClick={() => setToggle(!toggle)}
      >
        <h1 className="font-semibold text-lg pb-7">{question}</h1>
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
            <p className=" pb-7 text-[17px]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
