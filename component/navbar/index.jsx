import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../../public/image/header/logo.png";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalendarDays,
  faFire,
  faLightbulb,
  faTape,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <header>
      <Container>
        <Row className="py-2">
          <Col xxl={5} lg={4} className="d-flex justify-content-start">
            <div className={styles.logo + " d-flex align-items-center"}>
              <Image
                src={logo}
                alt="logo"
                width={22}
                height={27}
                className="me-2"
              />
              BSCPad
            </div>
          </Col>
          <Col xxl={7} lg={8}>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  className="d-flex align-items-center w-100 justify-content-center"
                >
                  <FontAwesomeIcon icon={faWallet} className="pe-2" />
                  Warning
                </Button>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  className="d-flex align-items-center  w-100 justify-content-center"
                >
                  <FontAwesomeIcon icon={faFire} className="pe-2" />
                  Projects
                </Button>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  className="d-flex align-items-center  w-100 justify-content-center"
                >
                  <FontAwesomeIcon icon={faTape} className="pe-2" />
                  Staking
                </Button>
              </Col>
              <Col md={1} className="d-flex justify-content-center">
                <Button variant="warning" className="rounded-circle">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </Button>
              </Col>
              <Col md={1} className="d-flex justify-content-center">
                <Button variant="warning" className="rounded-circle">
                  <FontAwesomeIcon icon={faLightbulb} />
                </Button>
              </Col>
              <Col md={1} className="d-flex justify-content-center">
                <Button variant="warning" className="d-flex align-items-center">
                  EN
                  <FontAwesomeIcon icon={faAngleDown} className="ps-1" />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
