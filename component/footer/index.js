import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.listFooter}>
          <ul>
            <Col sm={4} className="d-flex justify-content-start">
              <li>Copyright © 2023. All Rights Reserved by BSCPad</li>
            </Col>
            <Col sm={4} className="d-flex justify-content-center">
              <li>v1.3.7</li>
            </Col>
            <Col sm={4} className="d-flex justify-content-end">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="ps-2">
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
            </Col>
          </ul>
        </Row>
      </Container>
    </footer>
  );
}
