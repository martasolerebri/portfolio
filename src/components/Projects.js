import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const projects = {
      "Heart Disease Predictor": {
        desc:
          "Developed a complete data science pipeline for predicting cardiovascular disease severity, featuring robust missing-data handling and containerization. Implemented custom clinical risk feature engineering and optimized an L2-regularized Logistic Regression model that outperformed complex ensemble baselines.",
        techStack: "Python, scikit-learn, pandas, NumPy, Docker, Git",
        link: "https://github.com/martasolerebri/heart-disease-prediction",
        open: ""
      },
      "Sentinel Finance Engine": {
        desc:
          "A conversational AI agent connected to real transaction data. Ask questions like \"Where did my money go this month?\" and get precise answers — Sentinel picks the right tool, queries the database, and shows you exactly what it did.",
        techStack: "Python, LangGraph, FastAPI, SQLite, HTML/JS, Docker, Git",
        link: "https://github.com/martasolerebri",
        open: "https://github.com/martasolerebri/sentinel",
        icon: "chat",
        toolsLabel: "5 AGENT TOOLS",
        tools: ["analyze_spending", "category_trend", "top_expenses", "savings_goal", "financial_health"]
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-list">
            {Object.keys(projects).map((key, i, arr) => (
              <li 
                className="projects-card" 
                key={key}
                style={{ 
                  zIndex: i + 1,
                  top: '120px'
                }}
              >
                <div className="project-header">
                  <div className="folder-icon">
                    {projects[key].icon === "chat" ? (
                      <ChatBubbleOutlineIcon style={{ fontSize: 35 }} />
                    ) : (
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    )}
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  ></ExternalLinks>
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                
                {projects[key].tools && (
                  <div className="card-tools-container">
                    <div className="card-tools-label">{projects[key].toolsLabel}</div>
                    <ul className="card-tools-list">
                      {projects[key].tools.map((tool, index) => (
                        <li key={index} className="card-tool-badge">{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;