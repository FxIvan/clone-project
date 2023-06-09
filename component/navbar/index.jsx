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
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <Container className="d-sm-none d-md-block d-md-none d-lg-block d-none d-sm-block d-lg-none d-xl-block">
        <Row className="py-2">
          <Col xxl={5} lg={4} className="d-flex justify-content-start">
            <div className={styles.logo + " d-flex align-items-center"}>
              <Link href="/" className={styles.redirectPrincipal}>
                <Image
                  src={logo}
                  alt="logo"
                  width={22}
                  height={27}
                  className="me-2"
                />
                <span>BSCPad</span>
              </Link>
            </div>
          </Col>
          <Col xxl={7} lg={8}>
            <Row className={styles.containerButtonHeader}>
              <Col md={3} className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  className="btn-sm d-flex align-items-center w-100 justify-content-center rounded-pill"
                >
                  <FontAwesomeIcon icon={faWallet} className="pe-2" />
                  <span>Connect Wallet</span>
                </Button>
              </Col>
              <Col md={2} className="d-flex justify-content-center ps-2">
                <Link
                  href="/projects"
                  className={styles.button + " rounded-pill"}
                >
                  <FontAwesomeIcon icon={faFire} className="pe-2" />
                  Projects
                </Link>
              </Col>
              <Col md={2} className="d-flex justify-content-center">
                <Link
                  href="/staking"
                  className={styles.button + " rounded-pill"}
                >
                  <FontAwesomeIcon icon={faFire} className="pe-2" />
                  Staking
                </Link>
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
                <Button
                  variant="warning"
                  className="btn-sm d-flex align-items-center rounded-pill"
                >
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
