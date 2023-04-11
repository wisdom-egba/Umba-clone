import React from "react"
import wallet from "../../assets/wallet.svg"
const BisService = () => {
  return (
    <div className="w-full bg-[#f8f8f8] pt-[120px] md:pt-[100px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid  ">
        <div className="w-full">
          <h className="text-[54px] leading-tight">
            What makes us stand out from the rest?
          </h>
          <div className="flex py-6 ">
            <div className="md:w-[42%]">
              <p className="font-semibold text-lg">
                We are dedicated to promoting business growth and employee
                productivity, with a unique set of feature offerings on both
                sides.
              </p>
            </div>
            <div className=" px-6 ">
              <button className="bg-[#3d7cc9] hover:bg-[#0d3356] md:bg-[#0d3356] w-full m-auto px-5 py-2 text-white font-semibold text-lg ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[90px] pr-11">
          <div className="border border-l-blue-500 border-l-2 w-[97%]">
            <div className=" ml-[40px] flex flex-col">
              <div>
                <img className="w-[17%]" src={wallet} alt="" />
              </div>
              <h1 className="text-3xl mt-[30px] ">Saving Accounts</h1>
              <p className="text-lg font-semibold my-4">
                High interest savings accounts; allows users to set a fixed
                amount or % that gets deducted from their salary
              </p>
            </div>
          </div>

          {/* section 2 */}
          <div>
            <div>
              <img className="w-[6%]" src={wallet} alt="" />
            </div>
            <h1>Saving Accounts</h1>
            <p>
              High interest savings accounts; allows users to set a fixed amount
              or % that gets deducted from their salary
            </p>
          </div>
          {/* section 3 */}
          <div>
            <div>
              <img className="w-[6%]" src={wallet} alt="" />
            </div>
            <h1>Saving Accounts</h1>
            <p>
              High interest savings accounts; allows users to set a fixed amount
              or % that gets deducted from their salary
            </p>
          </div>
          {/* section 4 */}
          <div>
            <div>
              <img className="w-[6%]" src={wallet} alt="" />
            </div>
            <h1>Saving Accounts</h1>
            <p>
              High interest savings accounts; allows users to set a fixed amount
              or % that gets deducted from their salary
            </p>
          </div>
          {/* section 5 */}
          <div>
            <div>
              <img className="w-[6%]" src={wallet} alt="" />
            </div>
            <h1>Saving Accounts</h1>
            <p>
              High interest savings accounts; allows users to set a fixed amount
              or % that gets deducted from their salary
            </p>
          </div>
          {/* section 6 */}
          <div>
            <div>
              <img className="w-[6%]" src={wallet} alt="" />
            </div>
            <h1>Saving Accounts</h1>
            <p>
              High interest savings accounts; allows users to set a fixed amount
              or % that gets deducted from their salary
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BisService
