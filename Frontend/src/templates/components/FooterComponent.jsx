import { Container } from "react-bootstrap";

function FooterComponent({ name }) {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <small>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}

export default FooterComponent;