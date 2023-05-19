import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function ProjectsClosed() {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.titleProjectsClosed + " text-center"}>
          <h2>PROJECTS CLOSED</h2>
        </Col>
        <Col sm={12}>
          <Row>
            <h3>Cards</h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
