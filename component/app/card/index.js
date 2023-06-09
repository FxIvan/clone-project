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
import Link from "next/link";
import { useRouter } from "next/router";

import taunt from "../../../public/image/landing/TAUNT.jpg";
import icon2 from "../../../public/image/landing/iconbox2.jpg";
import Image from "next/image";

export default function Card({
  projectStatus,
  swapRate,
  cap,
  title,
  description,
  participant,
  id
}) {
  const handleClick = () => {
    // Aquí puedes realizar acciones adicionales antes de navegar a la ruta
    console.log("Props enviados:", id);
  };

  return (
    <Col sm={5} className={styles.containerCard + " p-4 mt-4"}>
      <Row>
        <Col sm={12}>
          <Row>
            <Col sm={4} className="d-flex">
              <div className={styles.iconBox}>
                <span>
                  <Image src={icon2} />
                </span>
              </div>
            </Col>
            <Col sm={8}>
              <Link href={`/projects/${id}`} passHref>
                <div
                  onClick={handleClick}
                  className={styles.link}
                  role="button"
                >
                  <div
                    className={
                      styles.containerHeaderCards + " d-flex flex-column"
                    }
                  >
                    <h4>{title}</h4>
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
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="py-3">
          <div className={styles.descriptionCard}>
            <p>{description}</p>
          </div>
        </Col>
        <Col sm={12}>
          <div className={styles.swapCapAccess}>
            <ol className="d-flex justify-content-between">
              <div className="text-left">
                <li>Swap rate</li>
                <li>
                  <span>{swapRate}</span>
                </li>
              </div>
              <div className="text-center">
                <li>Cap</li>
                <li>
                  <span>{cap}</span>
                </li>
              </div>
              <div>
                <li className="text-end">Access</li>
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
              Participants: <span>{participant}</span>
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
        </Col>
      </Row>
    </Col>
  );
}
