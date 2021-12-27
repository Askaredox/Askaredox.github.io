import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/about" element={ <About/> }/>
          <Route exact path="/blog" element={ <Blog/> }/>
          <Route exact path="/projects" element={ <Projects/> }/>
        </Routes>
      </div>
    );
  }
}

export default App;
