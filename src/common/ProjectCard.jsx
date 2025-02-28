import { useTheme } from "./ThemeContext";
import "./individual.css"

function ProjectCard({ src, h3, p, live_link, code_link }) {
  const { theme } = useTheme();

  return (
    <div className="individual">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <div className="pdiv" style={{maxWidth:"400px"}}>
        <p>{p}</p>
      </div>
      <div className="linksection">
        <div>
          <a
            style={{ color: theme === "dark" ? "white" : "black" }}
            href={live_link}
            target="_blank"
          >
            Live link
          </a>
        </div>
        <div>
          <a
            style={{ color: theme === "dark" ? "white" : "black" }}
            href={code_link}
            target="_blank"
          >
            Code link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
