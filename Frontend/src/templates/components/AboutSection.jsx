import { Container, Row, Col } from "react-bootstrap";
import styles from "../templates/ModernTemplate.module.css";

function AboutSection({ profile }) {
  return (
    <section id="about" className={`${styles.section} py-5`}>
      <Container>
        <h2 className="text-center mb-4">About</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center fs-5">{profile.bio}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;