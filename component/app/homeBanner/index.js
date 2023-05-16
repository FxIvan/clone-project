import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function HomeBanner() {
  return (
    <Container>
      <Row className={styles.containerHomeBanner}>
        <Col sm={12} className={styles.containerTitleAndP + " text-center"}>
          <h1 className="">
            BSCPAD IS THE FIRST DECENTRALIZED IDO PLATFORM FOR THE BINANCE SMART
            CHAIN NETWORK.
          </h1>
          <p className="m-auto">
            BSCPad will empower crypto currency projects with the ability to
            distribute tokens and raise liquidity.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
