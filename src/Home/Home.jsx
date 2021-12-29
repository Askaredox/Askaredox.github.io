import React from "react";
import "./Home.css";

import { FlexboxGrid, Col, Panel } from "rsuite";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let visitors = 16000;
    let badge = `https://img.shields.io/badge/visitor-${visitors}-green?style=plastic`;
    return (
      <FlexboxGrid  className="home">
        <FlexboxGrid.Item as={Col} colspan={24} md={12}>
          <h1>
            Hi, <br /> 
            I'm Andrés, <br />
            Software Engineer
          </h1>
          <br />
          <h4>Welcome to my webpage</h4>
          <br />
          <img alt="visitor" src={badge} />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={12}>
          {this.game()}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    );
  }
  game = () => {
    return (
      <Panel shaded className="gamefy">
        yup
      </Panel>
    )
  }
}

export default Home;

// https://api.countapi.xyz/hit/askaredox.github.io/visits
/**
 * justify="space-between"
 * md 992
 * sm 480
 */