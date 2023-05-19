import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "../card";

export default function ProjectsClosed() {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.titleProjectsClosed + " text-center"}>
          <h2>PROJECTS CLOSED</h2>
        </Col>
        <Col sm={12}>
          <Row>
            <Card projectStatus={false} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
