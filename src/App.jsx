import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Banking,
  Finance,
  Footer,
  Header,
  Info,
  NavBar,
  Open,
  Security,
} from "./components"
import { Business } from "./pages/Business"
import { Career, CareerHeader } from "./pages/Career"
import { ContactUs } from "./pages/Contact"
import Blog from "./pages/Blog/Blog"
import Press from "./pages/Press/Press"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <NavBar />
                <Info />
                <Finance />
                <Banking />
                <Security />
                <Open />
                <Footer />
              </div>
            }
          />
          <Route path="/business" element={<Business />} />
          <Route
            path="/career"
            element={
              <div>
                <CareerHeader />
                <NavBar />
                <Career />
              </div>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
