import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently pursuing a <b>Master's Degree in Artificial Intelligence</b> at
        <a href="https://edem.eu/"> EDEM Escuela de Empresarios</a>. Previously, I completed my 
        <b> Bachelor's Degree in Mathematics</b> at <a href="https://www.uv.es/">Universitat de Valencia</a>, 
        where I did my Bachelor's thesis on mathematical models in neuroscience.
        <br />
      </p>
    );
    const two = (
      <p>
        <br />
        Outside of work, I'm usually either deep into a literary novel, watching films, or on a yoga mat.
      </p>
    );

    const tech_stack = [
      "Python",
      "SQL",
      "LangGraph",
      "RAG",
      "Docker",
      "MLOps"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              {/* <img alt="Marta Soler Ebri" src={"/assets/me2.jpg"} /> */}
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;