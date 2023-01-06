import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, GitHubIcon } from './Icons';

export default function Footer() {
  return (
    <footer className='footer'>
      <a href=''>
        <FacebookIcon />
      </a>
      <a href=''>
        <TwitterIcon />
      </a>
      <a href=''>
        <InstagramIcon />
      </a>
      <a href=''>
        <GitHubIcon />
      </a>
    </footer>
  );
}
