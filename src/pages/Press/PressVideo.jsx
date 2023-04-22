import React from "react"
import ReactPlayer from "react-player"
import "../../PressVideo.css"

const PressVideo = () => {
  return (
    <div className="mb-9 flex justify-center m-auto items-center mt-8 lg:h-[300px]">
      <div className="reactPlayer">
        <ReactPlayer url="https://youtu.be/fTATNEPlciI" />
        {/* <video controls src="https://youtu.be/fTATNEPlciI"></video> */}
      </div>
    </div>
  )
}

export default PressVideo
