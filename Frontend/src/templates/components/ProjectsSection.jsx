import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../templates/ModernTemplate.module.css";

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className={`${styles.section} py-5`}>
      <Container>
        <h2 className="text-center mb-4">Projects</h2>

        {projects.length === 0 && (
          <p className="text-center text-muted">No projects yet.</p>
        )}

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project._id} xs={12} md={6}>
              <Card className="h-100 shadow-sm">
                {project.image && (
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  <div className="mt-auto d-flex gap-2">
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="outline-dark"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                        size="sm"
                      >
                        Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;