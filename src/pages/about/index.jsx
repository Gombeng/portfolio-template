import React from 'react'

const About = () => {
  return (
    <div id='about' className='container-fluid text-center bg-warning d-flex justify-content-center align-items-center vh-100'>
      <div className='p-5'>
        <h1 className='mb-5'>About Me</h1>
        <div className="row">
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur repudiandae aliquid veniam esse rerum cumque sequi quo</p>
          </div>
          <hr className="d-md-none" />
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur repudiandae aliquid veniam esse rerum cumque sequi quo dolorem exercitationem soluta aspernatur, praesentium vero debitis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About