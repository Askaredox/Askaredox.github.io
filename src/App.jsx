import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "rsuite/dist/rsuite.min.css";

import { Navbar, Nav, IconButton, Popover, Dropdown, Whisper } from "rsuite";
// import Dropdown from 'rsuite/Dropdown';
import { Icon } from "@rsuite/icons";
import MenuIcon from "@rsuite/icons/Menu";
import {
  FaFacebook,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Projects from "./Projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // TODO: Make it responsive
    return (
      <div>
        <Navbar appearance="sublte">
          <Navbar.Brand href="/">Andrés Carvajal</Navbar.Brand>
          {this.menu()}
        </Navbar>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        <footer className="footer">
          <div>
            <a className="socials" href="#"><Icon as={FaFacebook} size="3em" /></a>
            <a className="socials" href="#"><Icon as={FaInstagram} size="3em" /></a>
            <a className="socials" href="https://github.com/Askaredox"><Icon as={FaGithub} size="3em" /></a>
            <a className="socials" href="https://stackoverflow.com/users/13384125/askaredox" ><Icon as={FaStackOverflow} size="3em" /></a>
          </div>
          <br />
          Andrés Carvajal 2021
        </footer>
      </div>
    );
  }

  menu = () => {
    const renderMenu = ({ onClose, left, top, className }, ref) => {
      return (
        <Popover ref={ref} className={className} style={{ left, top }} full>
          <Dropdown.Menu>
            <Nav.Dropdown.Item as={Link} to="/">Home</Nav.Dropdown.Item>
            <Nav.Dropdown.Item as={Link} to="/blog">Blog</Nav.Dropdown.Item>
            <Nav.Dropdown.Item as={Link} to="/projects">Projects</Nav.Dropdown.Item>
            <Nav.Dropdown.Item as={Link} to="/about">About</Nav.Dropdown.Item>
          </Dropdown.Menu>
        </Popover>
      );
    };
    if (this.state.width <= 480) {
      return (
        <Nav pullRight>
          <Whisper placement="bottomEnd" trigger="click" speaker={renderMenu}>
            <IconButton appearance='subtle' icon={<MenuIcon size='5em'/>} style={{height:'56px', width:'56px'}}/>
          </Whisper>
        </Nav>
      )
    }
    else{
      return (
        <Nav pullRight>
          <Nav.Item as={Link} to="/">Home</Nav.Item>
          <Nav.Item as={Link} to="/blog">Blog</Nav.Item> 
          <Nav.Item as={Link} to="/projects">Projects</Nav.Item>
          <Nav.Item as={Link} to="/about">About</Nav.Item>
        </Nav>
      );
    }
  }
}

export default App;
