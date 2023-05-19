import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function ProjectOpenNow() {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.titleProjectsOpenNow + " text-center"}>
          <h2>PROJECTS OPEN NOW</h2>
        </Col>
        <Col sm={12} className={styles.projects + " text-center"}>
          <span>No projects currently open</span>
        </Col>
      </Row>
    </Container>
  );
}
