import { faDove, faM, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function ProfileButton() {
  return (
    <Container>
      <Row
        className={styles.containerButton + " d-flex justify-content-center"}
      >
        <Col sm={2} className="d-flex justify-content-end">
          <Button className="rounded-pill">
            <FontAwesomeIcon icon={faPaperPlane} className="pe-2" />
            <span>Join us on Telegram</span>
          </Button>
        </Col>
        <Col sm={2} className="d-flex justify-content-center">
          <Button className="rounded-pill">
            <FontAwesomeIcon icon={faM} className="pe-2" />
            <span>Follow our Medium</span>
          </Button>
        </Col>
        <Col sm={2} className="d-flex justify-content-start">
          <Button className="rounded-pill">
            <FontAwesomeIcon icon={faDove} className="pe-2" />
            <span>Follow our Twitter</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
