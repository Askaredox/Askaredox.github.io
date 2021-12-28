import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import 'rsuite/dist/rsuite.min.css';

import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
// import Dropdown from 'rsuite/Dropdown';
import { Icon } from '@rsuite/icons';
import { FaFacebook, FaGithub, FaStackOverflow, FaInstagram } from 'react-icons/fa';

import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Projects from "./Projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar appearance='sublte'>
          <Navbar.Brand href="/">
            Andrés Carvajal
          </Navbar.Brand>
          <Nav pullRight>
            <Nav.Item as={Link} to='/'>Home</Nav.Item>
            <Nav.Item as={Link} to='/blog'>Blog</Nav.Item>
            <Nav.Item as={Link} to='/projects'>Projects</Nav.Item>
            <Nav.Item as={Link} to='/about'>About</Nav.Item>
          </Nav>
        </Navbar>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/about" element={ <About/> }/>
          <Route exact path="/blog" element={ <Blog/> }/>
          <Route exact path="/projects" element={ <Projects/> }/>
        </Routes>
        <footer className='footer'>
          <div>
            <a className='socials' href="#"><Icon as={FaFacebook} size="3em" /></a>
            <a className='socials' href="#"><Icon as={FaInstagram} size="3em" /></a>
            <a className='socials' href="https://github.com/Askaredox"><Icon as={FaGithub} size="3em" /></a>
            <a className='socials' href="https://stackoverflow.com/users/13384125/askaredox"><Icon as={FaStackOverflow} size="3em" /></a>
          </div>
          <br/>
          Andrés Carvajal 2021
        </footer>
      </div>
    );
  }
}

export default App;
