import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function ProjectComingSoon() {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.projectComingSoon + " text-center"}>
          <h2>PROJECTS COMING SOON</h2>
        </Col>
        <Col sm={12}></Col>
      </Row>
    </Container>
  );
}
