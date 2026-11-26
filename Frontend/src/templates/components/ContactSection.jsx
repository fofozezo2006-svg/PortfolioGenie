import { Container, Button } from "react-bootstrap";
import styles from "../templates/ModernTemplate.module.css";

function ContactSection({ profile }) {
  return (
    <section id="contact" className={`${styles.section} py-5`}>
      <Container className="text-center">
        <h2 className="mb-4">Contact</h2>
        <p className="fs-5">
          Email:{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>

        <div className="d-flex justify-content-center gap-2">
          {profile.githubProfile && (
            <Button
              href={profile.githubProfile}
              target="_blank"
              rel="noreferrer"
              variant="outline-dark"
            >
              GitHub
            </Button>
          )}
          {profile.linkedinProfile && (
            <Button
              href={profile.linkedinProfile}
              target="_blank"
              rel="noreferrer"
              variant="outline-primary"
            >
              LinkedIn
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;