import { Button, Col, Container, Row } from "react-bootstrap";
import {
  faCircle,
  faDove,
  faGlobe,
  faPaperPlane,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

export default function DetailBanner() {
  return (
    <Container>
      <Row className={styles.containerDetailBanner}>
        <Col sm={6}>
          <Row>
            <Col sm={4}>FOTO</Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex flex-row align-items-center">
              <div className="pe-3">
                <h2>Verve</h2>
              </div>
              <div className={styles.rrss}>
                <a href="https://verve.fi/" target="_blank">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                  />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <FontAwesomeIcon
                    icon={faDove}
                    style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                  />
                </a>
                <a href="https://telegram.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                  />
                </a>
              </div>
            </Col>
            <Col sm={12}>
              <div className={styles.opensInTBA + " mb-2"}>
                <Button className="rounded-pill">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="fa-2xs pe-2"
                    style={{ color: "#f1b90c" }}
                  />
                  Opens in TBA
                </Button>
              </div>
              <div className={styles.closed + " mb-2"}>
                <Button className="rounded-pill">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="fa-2xs pe-2"
                    style={{ color: "red" }}
                  />
                  Closed
                </Button>
              </div>
              <div className={styles.opensInTBA + " mb-2"}>
                <Button className="rounded-pill">BUSD</Button>
              </div>
            </Col>
            <Col sm={12}>
              <div>
                <p>
                  Interactive streaming, reimagined on the Velas blockchain!
                </p>
              </div>
            </Col>
            <Col sm={12}>
              <Row>
                <Col xxl={3} lg={4} className={styles.buttonWallet +" d-flex justify-content-center"}>
                  <Button
                    variant="warning"
                    className="btn-sm d-flex align-items-center w-100 justify-content-center rounded-pill"
                  >
                    <span>Connect Wallet</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={6}></Col>
      </Row>
    </Container>
  );
}
