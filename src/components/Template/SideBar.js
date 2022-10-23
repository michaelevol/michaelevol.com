import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yuchen Li</h2>
        <p><a href="mailto:michaelevolm@gmail.com">michaelevolm@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yuchen Li. I like building things.
        I am a <a href="https://www.pnw.edu/"> Purdue University Northwest</a> Alumni, and a <a href="https://www.tjut.edu.cn/"> Tianjin University of Technology</a>  Alumni. My research interests include machine learning, deep learning, cybersecurity, and wireless communications.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yuchen Li <Link to="/">michaelevol.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
