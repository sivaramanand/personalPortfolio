import {useState} from 'react'
import "./Header.css"
import { useTheme } from "../../common/ThemeContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false); // Close menu after clicking
    };
  
    return (
      <header className={`header ${theme}`}>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={(e) => {e.preventDefault(); scrollToSection('hero')}}>Home</a></li>
            <li><a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => {e.preventDefault(); scrollToSection('skills')}}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    );
}

export default Header
