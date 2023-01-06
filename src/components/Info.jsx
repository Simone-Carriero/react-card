import React from 'react';
import image from '../assets/Rectangle90.png';

export default function Info() {
  return (
    <div className='info'>
      <img
        src={image}
        alt=''
        className='info-image'
      />
      <div>
        <h2 className='info-name'>Laura Smith</h2>
        <h4 className='info-role'>Frontend Developer</h4>
        <h5 className='info-website'>laurasmith.website</h5>
      </div>
      <div className='info-link-wrapper'>
        <a
          href=''
          className='info-link info-link--email'>
          Email
        </a>
        <a
          href=''
          className='info-link info-link--linkedin'>
          Linkedin
        </a>
      </div>
    </div>
  );
}
