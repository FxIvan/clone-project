import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "../card";

export default function ProjectComingSoon() {
  return (
    <Container>
      <Row>
        <Col sm={12} className={styles.projectComingSoon + " text-center"}>
          <h2>PROJECTS COMING SOON</h2>
        </Col>
        <Col sm={12}>
          <Row>
            <Card
              projectStatus={true}
              swapRate={`TBA`}
              cap={`TBA`}
              title={"Taunt Battleworld"}
              description={
                "World's first engage-to-earn NFT fighting game simulator developed by industry veterans from Amazon, EA, and Unity."
              }
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
