import React from "react"
import wallet from "../../assets/wallet.svg"
import icon2 from "../../assets/icon 2.svg"
import icon3 from "../../assets/icon 3.svg"
import icon4 from "../../assets/icon 4.svg"
import icon5 from "../../assets/icon 5.svg"
import icon6 from "../../assets/icon 6.svg"
const BisService = () => {
  return (
    <div className="w-full bg-[#f8f8f8] pt-[50px] md:pt-[100px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
        <div className="w-full grid lg:flex justify-evenly items-center">
          <h className="text-[40px] leading-tight md:text-[54px] leading-tight">
            What makes us stand out from the rest?
          </h>
          <div className="md:flex md:py-6 ">
            <div className="md:w-[42%] lg:w-[50%]">
              <p className="py-9 md:py-0 leading-tight font-semibold text-lg">
                We are dedicated to promoting business growth and employee
                productivity, with a unique set of feature offerings on both
                sides.
              </p>
            </div>
            <div className="pb-[70px] md:px-6 ">
              <button className="bg-[#3d7cc9] hover:bg-[#0d3356] duration-400  md:bg-[#0d3356] md:hover:bg-[#3d7cc9]   w-full m-auto px-5 py-2 text-white font-semibold text-lg outline-none ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[90px] pr-11">
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={wallet} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Saving Accounts</h1>
              <p className="font-semibold text-lg md:py-4">
                High interest savings accounts; allows users to set a fixed
                amount or % that gets deducted from their salary
              </p>
            </div>
          </div>

          {/* section 2 */}
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={icon2} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Salary Advance</h1>
              <p className="font-semibold text-lg md:py-4">
                Allows users to draw down up to 50% of their accrued net salary
                any day of the month
              </p>
            </div>
          </div>
          {/* section 3 */}
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={icon3} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Installment Loans</h1>
              <p className="font-semibold text-lg md:py-4">
                Allows users to borrow up to 3x of their monthly salary, 3- 9
                months for as low as a 5% monthly rate
              </p>
            </div>
          </div>
          {/* section 4 */}
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={icon4} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Link External Accounts</h1>
              <p className="font-semibold text-lg md:py-4">
                Seamless connection with secondary bank accounts.
              </p>
            </div>
          </div>
          {/* section 5 */}
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={icon5} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Visibility</h1>
              <p className="font-semibold text-lg md:py-4">
                Employee management dashboard with insights into employee
                financial health.
              </p>
            </div>
          </div>
          {/* section 6 */}
          <div className="border border-transparent border-l-blue-500 border-l-1 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={icon6} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Automated Payroll</h1>
              <p className="font-semibold text-lg md:py-4">
                Cut down on admin hours with simple book-keeping and accounting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BisService
