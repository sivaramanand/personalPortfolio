import React from "react";

function ProjectCard({ src, h3, p, live_link, code_link }) {
  return (
    <>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a style={{ color: "white" }} href={live_link} target="_blank">
        Live link
      </a>
      <a style={{ color: "white" }} href={code_link} target="_blank">
        Code link
      </a>
    </>
  );
}

export default ProjectCard;
