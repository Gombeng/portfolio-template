import { BgImage } from './../../assets';
const worksData = [
  {
    title: 'title 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum natus consequuntur in assumenda nemo, quae fuga quo dolorem quos.1',
    demo: 'demo 1',
    repo: 'repo 1',
  },
  {
    title: 'title 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum natus consequuntur in assumenda nemo, quae fuga quo dolorem quos.2',
    demo: 'demo 2',
    repo: 'repo 2',
  },
  {
    title: 'title 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum natus consequuntur in assumenda nemo, quae fuga quo dolorem quos.3',
    demo: 'demo 3',
    repo: 'repo 3',
  },
  {
    title: 'title 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum natus consequuntur in assumenda nemo, quae fuga quo dolorem quos.4',
    demo: 'demo 4',
    repo: 'repo 4',
  },
]


const WorksCard = ({ title, desc, demo, repo }) => {

  return (
    <div className="carousel-item active">
      <div class="card m-auto" style={{ width: '70%' }}>
        <div class="row g-0 align-items-center">
          <div class="col-md-6">
            <img src={BgImage} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body text-start">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{desc}</p>
              <a href="#" className="btn btn-outline-danger p-2 px-5 rounded-start-5 me-1">{repo}</a>
              <a href="#" className="btn btn-danger p-2 px-5 rounded-end-5">{demo}</a>
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
      <div className='w-100 text-center'>
        {/* <h3 className='mb-5 text-light'>Works</h3> */}

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {worksData.map(({ ...rest }) => <WorksCard {...rest} />)}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Works