import { Container, Row, Col } from "react-bootstrap";
import styles from "../templates/ModernTemplate.module.css";

// Dates arrive as ISO strings (or Date objects) from the backend
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";

function EducationSection({ education }) {
  return (
    <section id="education" className={`${styles.section} py-5 bg-light`}>
      <Container>
        <h2 className="text-center mb-4">Education</h2>

        {education.length === 0 && (
          <p className="text-center text-muted">No education added yet.</p>
        )}

        <Row className="justify-content-center">
          <Col md={8}>
            {education.map((item) => (
              <div key={item._id} className={styles.timelineItem}>
                <h5 className="mb-0">
                  {item.degree} in {item.field}
                </h5>
                <div className="text-primary">{item.institution}</div>
                <small className="text-muted">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </small>
                {item.description && <p className="mt-2 mb-0">{item.description}</p>}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EducationSection;