import { ImgBg } from "../../assets"
import { SocialIcon } from 'react-social-icons';


const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
    // bgColor: '#000000',
  },
  {
    id: 2,
    url: 'https://www.github.com/Gombeng/',
    // bgColor: '#000000',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/msr.gombeng/',
    // bgColor: '#000000',
  },
  // 'https://facebook.com/MSR.GOMBENG/',
];

const Home = () => {

  return (
    <div id="home" className="vh-100 bg-warning  d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h5 className="mt-5">Syahrizal Ardana</h5>
        <h1 className="mb-3">Front End Developer</h1>
        <p className="w-75 m-auto">
          I'm a front-end developer since 2020. I specialize in developing user-friendly and visually appealing websites and applications using technologies such as HTML, CSS, JavaScript, and React.
        </p>
        <div className="my-3">
          {social.map(({ id, ...rest }) => <SocialIcon key={id} style={{ scale: '.85' }} className='mx-2' {...rest} />)}
        </div>
        <button className="btn btn-danger p-2 px-5 me-1 rounded-5">Download CV</button>
      </div>
    </div>

  )
}

export default Home