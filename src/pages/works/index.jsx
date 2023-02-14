import { SocialIcon } from 'react-social-icons';
import { ImgBg, ImgWork1, ImgWork2, ImgWork3, ImgWork4, ImgWork5 } from './../../assets';

const worksData = [
  {
    id: '1',
    src: ImgWork1,
    title: 'Portfolio React 2',
    desc: 'Portfolio website created using react styled-components & bootstrap',
    demo: 'https://syahrizal-portfolio.vercel.app/',
    repo: 'https://github.com/Gombeng/react-portfolio',
  },
  {
    id: '2',
    src: ImgWork2,
    title: 'Portfolio React 1',
    desc: 'My first portfolio website created using react and scss',
    demo: 'https://syahrizal-portfolio.web.app/',
    repo: 'https://github.com/Gombeng/react-portfolio',
  },
  {
    id: '3',
    src: ImgWork3,
    title: 'Easely Quiz',
    desc: 'Quiz app build using react and get the question data from api',
    demo: 'https://easely-quiz.vercel.app/',
    repo: 'https://github.com/Gombeng/easely-quiz',
  },
  {
    id: '4',
    src: ImgWork4,
    title: 'Kitteni',
    desc: 'Application to display all the cute cat from around the world',
    demo: 'https://kitteni.vercel.app/',
    repo: 'https://github.com/Gombeng/kitteni',
  },
  {
    id: '5',
    src: ImgWork5,
    title: 'Denote',
    desc: 'Never lost any idea again, create note now!',
    demo: 'https://denote-mern.vercel.app/signup',
    repo: 'https://github.com/Gombeng/denote-mern',
  },
]

const WorksCard = ({ src, title, desc, demo, repo }) => {
  return (
    <div className="carousel-item active">
      <div className="card m-auto" style={{ width: '70%' }}>
        <div className="row g-0 align-items-center">
          <div className="col-lg-7">
            <img src={src} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-lg-5 text-center text-md-start">
            <div className="card-body">
              <h5 className="card-title mb-2 fw-bold">{title}</h5>
              <p className="card-text mb-3">{desc}</p>
              {/* <a href={repo} target='_blank' className="btn btn-outline-danger p-2 px-5 rounded-start-5 me-1">Repo</a> */}
              <a href={demo} target='_blank' className="btn btn-danger p-2 px-5 rounded-5 me-2">Demo</a>
              <SocialIcon style={{ scale: '.85' }} url={repo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <div id='works' className='container-fluid d-flex justify-content-center align-items-center vh-100'>
      <div className='w-100'>
        {/* <h3 className='mb-5 p-2 w-50 mx-auto rounded-5 card text-center d-md-none'>Swipe it</h3> */}

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {worksData.map(({ id, ...rest }) => <WorksCard key={id} {...rest} />)}
          </div>
          <button className="carousel-control-prev d-md-block" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next d-md-block" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Works