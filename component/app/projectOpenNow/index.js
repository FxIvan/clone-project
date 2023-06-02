import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function ProjectOpenNow({ activeTokens }) {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.titleProjectsOpenNow + " text-center"}>
          <h2>PROJECTS OPEN NOW</h2>
        </Col>
        <Col sm={12} className={styles.projects + " text-center"}>
        <Row className="d-flex justify-content-between">
            {activeTokens.map((token) => (
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
