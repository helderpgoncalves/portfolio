import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Hélder Gonçalves, I live in Portugal and I am 21y old.
              <br />
              <br />I am passionate self-taught{" "}
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Developer (however I have Bachelor Degree in
                  Computer Science Engineering)
                </b>
              </i>
              .
              <br />
              <br />
              My passion for software lies with dreaming up ideas and making
              them come true with elegant interfaces. I take great care in the
              experience, architecture, and code quality of the things I build.
              <br/>
              <br/>
              I am also an open-source enthusiast and maintainer. I learned a
              lot from the open-source community and I love how collaboration
              and knowledge sharing happened through open-source.
              <br />
              <br />
              I have knowledge in technologies like <i><b className="purple">HTML, CSS, Javascript, Node.js, Android Developmemnt, React, React Native, SQL, NoSQL, PHP, Firebase, Docker, Kubernetes, Smart Contracts, Solidity, Version Control Systems, etc  </b></i>. I am always learning new things.
              <br />
              <br />
              My field of Interest's are in&nbsp;
              <i>
                <b className="purple">Blockchain</b> and
                also in areas related to{" "}
                <b className="purple">
                  Mobile Development
                </b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/helderpgoncalves"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/heldinhoshotgun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/heldergoncalves16/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/helder_goncalves16/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
