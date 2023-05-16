import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import chainlink from "../../../public/image/landing/chainlink.svg";
import bluezillaDark from "../../../public/image/landing/bluezilla-dark.png";
import styles from "./styles.module.css";

export default function OurPartners() {
  return (
    <Container>
      <Row
        className={
          styles.containerOurPartner + " d-flex justify-content-center my-5"
        }
      >
        <Col lg={2} className="d-flex align-items-center justify-content-end">
          <h2>OUR PARTNERS</h2>
        </Col>
        <Col lg={2}>
          <Image src={chainlink} height={48} className="w-100" />
        </Col>
        <Col lg={2}>
          <Image src={bluezillaDark} height={48} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
}
