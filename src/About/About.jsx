import React from "react";
import './About.css';

import { Grid, Col, Panel, Whisper, Tooltip, Row } from "rsuite";
import { Icon } from "@rsuite/icons";

import { FaQuestion } from "react-icons/fa";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>Who I am?</h1>
        <br/>
        <Grid style={{width:'100%'}} fluid>
          <Row>
            <Col lg={13} md={15}>
              <img style={{width:'90%'}} src='https://media.giphy.com/media/cl83qB3OpgHZToeA6h/giphy.gif'></img>
            </Col>
            <Col lgHidden mdHidden style={{width:'100%'}}>
              <br/>
            </Col>
            <Col lg={11} md={9}>
              <h2>Andrés Carvajal</h2>
              <p>Student of Computer Science Engineering coursing the last year of college.</p>
              <br/>
              <Panel bordered>
                <h3>Strengths:</h3>
                <img src="https://img.shields.io/badge/_-Python-black?style=plastic&logo=Python" alt="python" />&nbsp;
                <img src="https://img.shields.io/badge/_-ReactJS-black?style=plastic&logo=react" alt="ReactJs" />&nbsp;
                <img src="https://img.shields.io/badge/_-HTML-black?style=plastic&logo=HTML5" alt="HTML" />&nbsp;
                <img src="https://img.shields.io/badge/_-JavaScript-black?style=plastic&logo=JavaScript" alt="JavaScript" />&nbsp;
                <img src="https://img.shields.io/badge/_-MySQL-black?style=plastic&logo=mysql" alt="MySQL" />&nbsp;
                <img src="https://img.shields.io/badge/_-Docker-black?style=plastic&logo=docker" alt="Docker" />&nbsp;
                <img src="https://img.shields.io/badge/_-Raspberry_Pi-black?style=plastic&logo=Raspberry-Pi" alt="Raspberry-Pi" />&nbsp;
                <br/><br/>
                <h4>Weaknesses:</h4>
                <img src="https://img.shields.io/badge/_-PHP-black?style=plastic&logo=PHP" alt="PHP" />&nbsp;
                <img src="https://img.shields.io/badge/_-Go-black?style=plastic&logo=Go" alt="Go" />&nbsp;
              </Panel>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col lg={13} md={15}>
              <img src='https://media.giphy.com/media/cl83qB3OpgHZToeA6h/giphy.gif'></img>
            </Col>
            <Col lg={11} md={9}>
              trasdf
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
  tooltip = (
    <Tooltip>
      Work until the work is done.
    </Tooltip>
  );
}
/**
 * 
        <FlexboxGrid>
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <Panel bordered>
              <h5>Category:</h5>
              <p>Engineering</p>
              <br/>
              <h5>Ability:</h5>
              <Whisper placement="bottomStart" trigger="hover" speaker={this.tooltip}>
                <p>Until done</p>
              </Whisper>
            </Panel>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <Panel bordered>
              asdfas
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
 */
export default About;