import React from "react"
import PressVideo from "./PressVideo"
import { CareerHeader } from "../Career"
import { Footer, NavBar } from "../../components"
import PressInfo from "./PressInfo"

const Press = () => {
  return (
    <div>
      <CareerHeader />
      <NavBar />
      <PressVideo />
      <PressInfo />
      <Footer />
    </div>
  )
}

export default Press
