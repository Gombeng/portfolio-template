import React from 'react'
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
    bgColor: '#b4b4b4',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/msr.gombeng/',
    // bgColor: '#000000',
  },
  // 'https://facebook.com/MSR.GOMBENG/',
];

const Footer = () => {
  return (
    <div className='p-3 text-center bg-dark text-light'>
      
      <div className="my-3">
          {social.map(({ id, ...rest }) => <SocialIcon key={id} style={{ scale: '.85' }} className='mx-2' {...rest} />)}
        </div>
      &copy; Syahrizal Ardana 2023 
    </div>
  )
}

export default Footer