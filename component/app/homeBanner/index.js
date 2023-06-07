import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function HomeBanner() {
  return (
    <Container>
      <Row className={styles.containerHomeBanner}>
        <Col sm={12} className={styles.containerTitleAndP + " text-center"}>
          <h1 className="">
            ROIPAD is a decentralized ICO platform on Bitcoin Chain. BRC-20 Tokens
          </h1>
          <p className="m-auto">
            ROIPAD will empower crypto currency projects with the ability to distribute tokens and
            raise liquidity in BRC-20 tokens.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
