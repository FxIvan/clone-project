import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faDove,
  faGlobe,
  faM,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ projectStatus }) {
  return (
    <Col sm={5} className={styles.containerCard + " p-4"}>
      <Row>
        <Col sm={12}>
          <Row>
            <Col sm={4}>IMAGE</Col>
            <Col sm={8}>
              <div
                className={styles.containerHeaderCards + " d-flex flex-column"}
              >
                <h4>Taunt Battleworld</h4>
                <div className={styles.buttonrrss + " mb-2 d-flex"}>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="fa-sm"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faDove}
                      className="fa-sm"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faM}
                      className="fa-sm"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="fa-sm"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </a>
                </div>
                {projectStatus && projectStatus === true ? (
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
                ) : (
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
                )}
                <div className={styles.opensInTBA + " mb-2"}>
                  <Button className="rounded-pill">BUSD</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="py-3">
          <div className={styles.descriptionCard}>
            <p>
              World's first engage-to-earn NFT fighting game simulator developed
              by industry veterans from Amazon, EA, and Unity.
            </p>
          </div>
        </Col>
        <Col sm={12}>
          <div className={styles.swapCapAccess}>
            <ol className="d-flex justify-content-between">
              <div>
                <li>Swap rate</li>
                <li>
                  <span>TBA</span>
                </li>
              </div>
              <div>
                <li>Cap</li>
                <li>
                  <span>TBA</span>
                </li>
              </div>
              <div>
                <li>Access</li>
                <li>
                  <span>Private</span>
                </li>
              </div>
            </ol>
          </div>
        </Col>
        <Col sm={12} className={styles.containerProgressBar}>
          <div className="d-flex justify-content-between">
            <p className="mb-1">Progress</p>
            <p className="mb-1">
              Participants: <span>3640</span>
            </p>
          </div>
          <div>
            <ProgressBar variant="warning" now={60} />
          </div>
          <div className="d-flex justify-content-between">
            <p>0%</p>
            <p>0/1000</p>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
