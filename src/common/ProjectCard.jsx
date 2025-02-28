import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

function ProjectCard({ src, h3, p, live_link, code_link }) {
  const { theme } = useTheme();

  return (
    <>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a
        style={{ color: theme === "dark" ? "white" : "black" }}
        href={live_link}
        target="_blank"
      >
        Live link
      </a>
      <a
        style={{ color: theme === "dark" ? "white" : "black" }}
        href={code_link}
        target="_blank"
      >
        Code link
      </a>
    </>
  );
}

export default ProjectCard;
