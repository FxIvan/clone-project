import { Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function TieredSystem() {
  return (
    <Container className={styles.containerTieredSystem}>
      <Row className="text-center justify-content-center">
        <h2>THE BSCPAD TIERED SYSTEM</h2>
        <div className={styles.paragraph + " d-flex justify-content-center"}>
          <p className="">
            BSCPad will showcase a fixed tier system based on the number of
            tokens staked. Lottery Tiers will share 20% of total raise and rest
            80% of the raise is assigned for guaranteed allocation tiers based
            on the pool weights assigned.
          </p>
        </div>
      </Row>
    </Container>
  );
}
