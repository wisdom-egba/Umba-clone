import React from "react"
import Blog from "./Blog"
import CareerHeader from "../Career/CareerHeader"
import { Footer, NavBar } from "../../components"
const BlogPage = () => {
  return (
    <div>
      <CareerHeader />
      <NavBar />
      <Blog />
      <Footer />
    </div>
  )
}

export default BlogPage
