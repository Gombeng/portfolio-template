import Routes from "./utils/Routes"
import { Footer, Navbar2 } from './components';
import { About, Contact, Home, Works } from "./pages";

const App = () => {
  return (
    <>
      <Navbar2 />
      <Home />
      <div className="parallax">
        <Works />
      </div>
      <About />
      <div className="parallax">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
