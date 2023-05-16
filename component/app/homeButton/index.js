import { Button, Col, Container, Row } from "react-bootstrap";
import rabbit from "../../../public/image/landing/rabbit.png";
import mexc from "../../../public/image/landing/mexc.svg";
import gateio from "../../../public/image/landing/gateio.svg";
import fiat2bnb from "../../../public/image/landing/fiat2bnb.png";
import Image from "next/image";

import styles from "./styles.module.css";
export default function HomeButton() {
  return (
    <Container className="my-5">
      <Row
        className={
          styles.containerButton + " text-center d-flex justify-content-center"
        }
      >
        <Col xxl={2} xs={3} className="mb-3 me-1">
          <Button variant="warning" className="w-100 rounded-pill">
            VEW ALL PROJECTS
          </Button>
        </Col>
        <Col xxl={3} xs={3} lg={4} className="mb-3 me-1">
          <Button variant="info" className="w-100 rounded-pill">
            BUY ON <Image src={rabbit} width={20} height={20} /> PANCAKE SWAP
          </Button>
        </Col>
        <Col xxl={2} xs={2} lg={3} className="mb-3 me-1">
          <Button variant="success" className="w-100 rounded-pill">
            APPLY FOR IDO
          </Button>
        </Col>
        <Col xxl={2} xs={3} lg={3} className="mb-3 me-1">
          <Button variant="warning" className="w-100 rounded-pill">
            <Image src={mexc} width={20} height={20} /> BUY ON MEXC
          </Button>
        </Col>
        <Col xxl={2} xs={3} lg={3} className="mb-3">
          <Button
            variant="warning"
            className={styles.gateIo + " w-100 rounded-pill"}
          >
            <Image src={gateio} width={20} height={20} /> BUY ON GATE.IO
          </Button>
        </Col>
        <Col xxl={2} xs={3} lg={3} className="mb-3">
          <Button variant="light" className="w-100 rounded-pill text-dark">
            <Image src={fiat2bnb} width={20} height={20} /> BUY WITH FIAT
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
