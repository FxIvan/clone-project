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
            <Card
              projectStatus={false}
              swapRate={`${1} BUSD = ${11.756} MHUNT`}
              cap={50000}
              title={"MetaShooter (Blue Diamond Private)"}
              description={
                "The first decentralized blockchain-based hunting metaverse that joins millions of hunting enthusiasts into one community!"
              }
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
