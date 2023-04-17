import React from "react"

const Jobs = ({ category }) => {
  const { title, location } = category
  return (
    <div className=" m-4 md:m-0 md:mr-7 md:ml-7 border-b border-t border-gray-200 ">
      <div className="md:pt-2 md:pb-2 rounded-md">
        <h1 className="text-lg md:font-semibold font-bold">{title}</h1>
        <h3 className="text-sm">
          <span className="md:font-semibold font-bold">Location:</span>{" "}
          {location}
        </h3>
        <p className="md:py-2">
          <a href="#" className="underline text-sm text-blue-600">
            + View details
          </a>
        </p>
      </div>
    </div>
  )
}

export default Jobs
