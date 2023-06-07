import { Col, Container, Row } from "react-bootstrap";
import scMediumA from "../../../public/image/landing/sc-medium-a.png";
import styles from "./styles.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Container className={styles.aboutUsContainer}>
      <Row className={styles.titleAboutUs + " text-center my-5"}>
        <h2 className="">ABOUT US</h2>
      </Row>
      <Row className="d-flex align-items-center">
        <Col sm={6} className={styles.containerDescription}>
          <div>
            <h4 className="">WHAT IS ROIPad?</h4>
            <p className="text-light">
              <strong>
                The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart
                Chain Network.
              </strong>
            </p>
            <p className="">
              ROIPad will empower crypto currency projects with the ability to distribute tokens and
              raise liquidity.
            </p>
          </div>
          <div>
            <h4 className="">WHY CHOOSE US?</h4>
            <p className="text-light">
              <strong>
                ROIPad has found a solution to incentivize and reward all token stakers in a way
                that is inclusive and with a low barrier to entry.
              </strong>
            </p>
            <p className="pb-2">
              The fundamental flaws of existing launchpads is that acquiring enough tokens to
              participate in the ecosystem is prohibitive, and even if you do stake the tokens, you
              are not guaranteed an allocation spot. They are based on a first come first serve
              basis where automated bots can fill the whitelist spots in a matter of seconds. ROIPad
              is creating fair decentralized launches, you can choose between a lottery tier or a
              guaranteed allocation tier and if you win the lottery you get a guaranteed allocation
              in the first round (Allocation round).
            </p>
            <p className="">
              The hallmark of the ROIPad is a two-round system that makes every tier level
              guaranteed an allocation. There is no first come first serve or bots; only fair
              distributed rewards for all participants.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="position-relative">
            <div className="position-relative">
              <div className={styles.nkCircleAnimation}>
                {/*<div className={styles.nkCircleAnimationCenter}></div>*/}
              </div>
            </div>
            <div className={styles.imgAboutUs}>
              <Image src={scMediumA} className="w-100 h-100" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
