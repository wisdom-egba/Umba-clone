import React from "react"
import spon1 from "../../assets/bfree.png"
import spon2 from "../../assets/money 254.png"
const BisSponsor = () => {
  return (
    <div className="w-full bg-[white] pt-[100px] md:pt-[40px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto md:py-10 lg:py-0 flex justify-between items-center">
        <div className="text-2xl font-bold leading-tight">
          <h1 className="w-[70%] text-center">Trusted by</h1>
        </div>
        <div className=" w-[60%] gap-4  flex ">
          <div>
            <img src={spon1} alt="" />
          </div>
          <div>
            <img src={spon2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BisSponsor
