import { Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faGlobe,
  faHeadset,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Container className="my-5">
      <Row
        className={`${styles.titleContact} ${styles.small} $${styles.fast} text-center my-5`}
      >
        <h2>CONTACT</h2>
      </Row>
      <Row className="pb-5">
        <div className="position-relative">
          <div className={styles.spinnerContainer}>
            <div className={styles.spinnerBlock}>
              <div class={`${styles.spinner}  ${styles.spinnerOne}`}></div>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div>
              <ul>
                <li className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-light pe-2"
                  />{" "}
                  <a href="#">Contact Support</a>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-light pe-2"
                  />
                  <a href="#">Join us on Telegram</a>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faDove} className="text-light pe-2" />
                  <a href="#">Follow our Twitter</a>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faGlobe} className="text-light pe-2" />{" "}
                  <a href="#">www.sisal.cloud</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
