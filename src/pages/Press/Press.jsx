import React from "react"
import PressVideo from "./PressVideo"
import { CareerHeader } from "../Career"
import { Footer, NavBar } from "../../components"
import PressInfo from "./PressInfo"
import PressResource from "./PressResource"

const Press = () => {
  return (
    <div>
      <CareerHeader />
      <NavBar />
      <PressVideo />
      <PressInfo />
      <PressResource />
      <Footer />
    </div>
  )
}

export default Press
