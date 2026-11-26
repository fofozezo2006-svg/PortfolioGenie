import styles from "./ModernTemplate.module.css";

import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import FooterComponent from "./components/FooterComponent";

// Modern template: receives the full portfolio object (same shape as the
// backend Portfolio schema, plus the `profile` object) and renders all sections.
function ModernTemplate({ portfolio }) {
  const { profile, projects, education } = portfolio;

  return (
    <div id="top" className={styles.template}>
      <NavbarComponent logo={profile.name} />
      <HeroSection portfolio={portfolio} />
      <AboutSection profile={profile} />
      <SkillsSection skills={profile.skills} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} />
      <ContactSection profile={profile} />
      <FooterComponent name={profile.name} />
    </div>
  );
}

export default ModernTemplate;