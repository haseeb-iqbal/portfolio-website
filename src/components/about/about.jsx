import React from "react";
import "./about.css";
import Github from "../../img/github.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          I am a freelance web developer specialising in React. With 4 years of
          professional programming experience and a bachelors degree in computer
          science, you can rest assured that any code delivered will be high
          quality and efficient. Born and raised in Scotland, I am fluent in
          English and guarantee to provide quality communication.
        </p>
        <p className="a-desc">
          Most recently I’ve been working on the internal websites for&nbsp;
          <a href="https://www.lifestylemarketing.com/" target="_blank">
            lifestylemarketing
          </a>
          &nbsp; and{" "}
          <a href="https://klo.dev/" target="_blank">
            Klotho
          </a>
          . Before this, I was working at{" "}
          <a href="https://www.dcsl.com/" target="_blank">
            DCSL Guidesmiths
          </a>
          , which is ranked the #1 web development company in the UK.
        </p>
        <div className="a-award">
          <a href="https://github.com/haseeb-iqbal" target="_blank">
            <img src={Github} alt="" className="a-award-img" target="_blank" />
          </a>
          <div className="a-award-texts">
            <a href="https://github.com/haseeb-iqbal" target="_blank">
              <h4 className="a-award-title">Checkout my Github</h4>
            </a>

            <div className="a-award-desc">
              I’m always working on either personal projects or projects for
              clients. Since much of my work consists of collaborating on
              external repositories, all my work isn’t showcased here but I have
              left a few projects public. In fact, this very site is public on
              my Github!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
