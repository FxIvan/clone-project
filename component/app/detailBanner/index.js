import { Button, Col, Container, Row, Table, ProgressBar } from "react-bootstrap";
import {
  faCircle,
  faDove,
  faGlobe,
  faPaperPlane,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import icon2 from "../../../public/image/landing/iconbox2.jpg"
import styles from "./styles.module.css";


export default function DetailBanner({ token }) {
  console.log("token banner", token.token_status)
  const openClose = token.token_status === "active" ? true : token.token_status === "coming_soon" ? true : token.token_status === "closed" ? false : true

  return (
    <Container>
        <div className={styles.containerCard + " p-4 mt-4"}>
          <Row>
            <Col sm={4} className="d-flex">
              <div className={styles.iconBox}>
                <span>
                  <Image src={icon2} />
                </span>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="pe-3">
                  <h2>{token.name}</h2>
                </div>
                <div className={styles.rrss}>
                  <a href="https://verve.fi/" target="_blank">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                    />
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faDove}
                      style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                    />
                  </a>
                  <a href="https://telegram.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      style={{ width: "16px", height: "16px", color: "#f1b90a" }}
                    />
                  </a>
                </div>
              </div>
              <div className={styles.columnLeft}>
                <Row className="d-flex flex-column p-2">
                  {openClose && openClose === true ? (
                    <div className={styles.opensInTBA + " mb-2"}>
                      <Button className="rounded-pill">
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
                </Row>
              </div>
              <div className="d-flex p-2">
                <p>{token.description}</p>
              </div>
              <Row>
                <Col  lg={4} className={styles.buttonWallet + " d-flex justify-content-center"}>
                  <Button
                    variant="warning"
                    className="btn-sm d-flex align-items-center w-100 justify-content-center rounded-pill"
                  >
                    <span>Connect Wallet</span>
                  </Button>
                </Col>
              </Row>
            </div>
            <div className={"col"} >
              <div className={styles.containerProgressBar}>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">Progress</p>
                  <p className="mb-1">
                    Participants: <span>0</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="warning" now={60} />
                </div>
      <div className="d-flex justify-content-between">
        <p>
          <span>0%</span>
        </p>
        <p>
          <span>0/1000</span>
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <Row>
          <Col sm={6}>
            <Table bordered className={styles.table}>
            <thead>
              <tr>
                <th colSpan={2}>Pool information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Opens</td>
                <td>{token.name}</td>
              </tr>
              <tr>
                <td>FCFS Opens</td>
                <td>{token.ticker}</td>
              </tr>
              <tr>
                <td>Closes</td>
                <td>{token.token_price}</td>
              </tr>
              <tr>
                <td>Swap Rate</td>
                <td>{token.token_max_amount}</td>
              </tr>
              <tr>
                <td>Cap</td>
                <td>{token.token_address}</td>
              </tr>
              <tr>
                <td>Total Users Participated</td>
                <td>{token.description}</td>
              </tr>
              <tr>
                <td>Total Funds Swapped</td>
                <td>{token.token_status}</td>
              </tr>
              <tr>
                <td>Access Type</td>
                <td>{token.token_twitter || "-"}</td>
              </tr>
            </tbody>
            </Table>
          </Col>
          <Col sm={6}>
          <Table bordered className={styles.table}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{token.name}</td>
              </tr>
              <tr>
                <td>Ticker</td>
                <td>{token.ticker}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{token.token_price}</td>
              </tr>
              <tr>
                <td>Max Amount</td>
                <td>{token.token_max_amount}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{token.token_address}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{token.description}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{token.token_status}</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>{token.token_twitter || "-"}</td>
              </tr>
              <tr>
                <td>Telegram</td>
                <td>{token.token_telegram || "-"}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{token.token_website || "-"}</td>
              </tr>
            </tbody>
          </Table>
          </Col>

        </Row>
    </Container>
  );
}
