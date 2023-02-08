import { BgImage } from "../../assets"

const Home = () => {
  return (
    <div id="home" className="d-flex">
      <div className="bg-warning w-50 d-flex align-items-center">
        <div className="p-5">
          <p>some text here</p>
          <h1>nice tagline here</h1>
          <p className="w-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque velit maiores libero eum sapiente architecto.</p>
          <button className="btn btn-danger p-2 px-5 me-1 rounded-start-5">Download CV</button>
          <a href="#contact" className="btn btn-outline-danger p-2 px-5 rounded-end-5">Contact</a>
        </div>
      </div>
      <div className="text w-50">
        <img className="vh-100" src={BgImage} alt="" />
      </div>
    </div>

  )
}

export default Home