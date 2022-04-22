import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Service 1</Link>
            <Link to='/'>Service 2</Link>
            <Link to='/'>Service 3</Link>
            <Link to='/'>Service 4</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JExport Sri Lanka
            </Link>
          </div>
          <small class='website-rights'>JWare Automation © 2022</small>
          <div class='social-icons'>
          <a href='https://www.facebook.com/'target='_blank' aria-label='Facebook' class='social-icon-link facebook'><i class='fab fa-facebook-f' /></a>
          <a href='https://www.instagram.com/'target='_blank' aria-label='Instagram' class='social-icon-link instagram'><i class='fab fa-instagram' /></a>
          <a href='https://www.youtube.com/'target='_blank' aria-label='Youtube'  class='social-icon-link youtube'><i class='fab fa-youtube' /></a>
          <a href='https://twitter.com/'target='_blank' aria-label='Twitter' class='social-icon-link twitter'><i class='fab fa-twitter' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;