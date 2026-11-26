import { Container, Image, Button } from "react-bootstrap";

function HeroSection({ portfolio }) {
  const { profile, description } = portfolio;

  return (
    <header className="text-center py-5 bg-light">
      <Container className="py-4">
        <Image
          src={profile.imageUrl}
          alt={profile.name}
          roundedCircle
          width={160}
          height={160}
          className="mb-3 border border-3 border-primary"
        />
        <h1 className="display-5 fw-bold">{profile.name}</h1>
        <h2 className="h4 text-primary">{profile.jobTitle}</h2>
        <p className="lead text-muted mt-3">{description}</p>

        <div className="d-flex justify-content-center gap-2 mt-4">
          {profile.githubProfile && (
            <Button
              href={profile.githubProfile}
              target="_blank"
              rel="noreferrer"
              variant="dark"
            >
              GitHub
            </Button>
          )}
          {profile.linkedinProfile && (
            <Button
              href={profile.linkedinProfile}
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              LinkedIn
            </Button>
          )}
        </div>
      </Container>
    </header>
  );
}

export default HeroSection;