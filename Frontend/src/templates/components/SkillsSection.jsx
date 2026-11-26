import { Container, Badge } from "react-bootstrap";
import styles from "../templates/ModernTemplate.module.css";

function SkillsSection({ skills }) {
  return (
    <section id="skills" className={`${styles.section} py-5 bg-light`}>
      <Container className="text-center">
        <h2 className="mb-4">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {skills.map((skill) => (
            <Badge key={skill} pill bg="primary" className="fs-6 px-3 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;