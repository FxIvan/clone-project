import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "../card";

export default function ProjectComingSoon({ comingSoonTokens }) {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.projectComingSoon + " text-center"}>
          <h2>PROJECTS COMING SOON</h2>
        </Col>
        <Col sm={12}>
          <Row className="d-flex justify-content-between">
            {comingSoonTokens.map((token) => (
              <Card
                tittle={token.name}
                description={token.description}
                participant={0}
                projectStatus={true}
                swapRate={token.ticker}
                cap={token.ticker}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}