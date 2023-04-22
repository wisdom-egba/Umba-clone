import React from "react"
import umba1 from "../../assets/umba1.svg"
import umba2 from "../../assets/umba2.svg"
import umba3 from "../../assets/umba3.svg"
import umba4 from "../../assets/umba4.png"
import umba5 from "../../assets/umba5.svg"
import umba6 from "../../assets/umba6.png"
const Brand = () => {
  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto bg-white md:mt-20 shadow-lg rounded-lg">
      <h1 className="text-4xl w-[70%] md:text-[40px] md:w-[85%]  mx-6">
        Brand Guidelines
      </h1>
      <p className="text-3xl md:text-3xl mx-6 md:w-[85%] py-4 md:py-4 ">Logo</p>
      <div className="grid grid-cols-2 w-[85%] place-items-center gap-10 md:mx-6 md:mb-8 m-auto md:m-0 ">
        <div className="md:w-[65%] lg:w-[90%] md:ml-10 lg:ml-20  pb-7">
          <img className="w-full" src={umba1} alt="" />
          <p className="font-semibold ">
            This is our primary logo in horizontal logotype.
          </p>
        </div>
        <div className="md:w-[66%] lg:w-[90%] md:mr-8 lg:mr-20 pb-7">
          <img className="w-full" src={umba2} alt="" />
          <p className="font-semibold">
            When you are limited on space, use only the logomark.
          </p>
        </div>
      </div>
      {/* section2 */}
      <p className="text-3xl md:text-3xl mx-6 md:w-[85%] py-4 md:py-4">
        Clearspace
      </p>
      <div className="grid grid-cols-2 w-[85%] place-items-center gap-10 md:mx-6 md:mb-8 m-auto md:m-0 ">
        <div className="md:w-[65%] lg:w-[90%] md:ml-10 lg:ml-20  pb-7">
          <img className="w-full" src={umba3} alt="" />
          <p className="font-semibold ">
            Clearspace for horizontal logotype. Please dont’t put anything in
            the blue zone
          </p>
        </div>
        <div className="md:w-[65%] lg:w-[90%] md:mr-8 lg:mr-20 pb-7">
          <img className="w-full" src={umba4} alt="" />
          <p className="font-semibold">
            Clearspace for logomark. Please dont’t put anything in the blue zone
          </p>
        </div>
      </div>
      {/* section3 */}
      <p className="text-3xl md:text-3xl mx-6 md:w-[85%] py-4 md:py-4">
        Avoid these uses
      </p>
      <div className="grid grid-cols-2 w-[85%] place-items-center gap-10 md:mx-6 m-auto md:m-0 ">
        <div className="md:w-[65%] lg:w-[90%] md:ml-10 lg:ml-20  pb-7">
          <img className="w-full" src={umba5} alt="" />
          <p className="font-normal ">
            Do not use logotype and logomark as lockup.
          </p>
        </div>
        <div className="md:w-[65%] lg:w-[90%] md:mr-8 lg:mr-20 pb-7">
          <img className="w-full" src={umba6} alt="" />
          <p className="font-normal">Do not stretch logomark</p>
        </div>
      </div>
    </div>
  )
}

export default Brand
