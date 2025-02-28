import styles from "./ProjectsStyles.module.css";

import ProjectCard from "../../common/ProjectCard";
import Spotify from "../../assets/spotify_clone.png";
import Twitter from "../../assets/Twitter_clone.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Twitter}
          h3="Twitter clone"
          p="Social media app with posts,likes,comments,followersfollowing and much more"
          live_link="https://mern-twitter-clone-siva.onrender.com/"
          code_link="https://github.com/sivaramanand/mern-twitter-clone"
        />

        <ProjectCard
          src={Spotify}
          h3="Spotify clone"
          p="Music streaming app with music streaming,adding songs to playlists and much more"
          live_link="https://mern-spotify-clone-siva.onrender.com/"
          code_link="https://github.com/sivaramanand/mern-spotify-clone"
        />

      </div>
    </section>
  );
}

export default Projects;
