import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "../card";

export default function ProjectsClosed() {
  return (
    <Container className={styles.containerProjectsClosed}>
      <Row>
        <Col sm={12} className={styles.titleProjectsClosed + " text-center"}>
          <h2>PROJECTS CLOSED</h2>
        </Col>
        <Col sm={12}>
          <Row className="d-flex justify-content-between">
            <Card
              projectStatus={false}
              swapRate={`${1} BUSD = ${11.756} MHUNT`}
              cap={50000}
              title={"MetaShooter (Blue Diamond Private)"}
              description={
                "The first decentralized blockchain-based hunting metaverse that joins millions of hunting enthusiasts into one community!"
              }
              participant={3879}
            />
            <Card
              projectStatus={false}
              swapRate={`${1} BUSD = ${8.596} MHUNT`}
              cap={45000}
              title={"Metafluence (Blue Diamond Private)"}
              description={
                "Enabling influencers to monetize their social media power and creativity in the Metaverse."
              }
              participant={4079}
            />

            <Card
              projectStatus={false}
              swapRate={`${1} BUSD = ${7.2} MHUNT`}
              cap={96000}
              title={"Metafluence"}
              description={
                "Enabling influencers to monetize their social media power and creativity in the Metaverse."
              }
              participant={379}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
