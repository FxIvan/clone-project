import { Col, Container, Row } from "react-bootstrap";
import gfx from "../../../public/image/landing/gfx.png";

import styles from "./styles.module.css";
import Image from "next/image";
export default function RoundTwo() {
  return (
    <Container>
      <Row className={styles.containerParagraph + " text-center my-5"}>
        <p>
          In the first round, called the “Allocation Round”, users can purchase the amount allotted
          to them based on their tier.
        </p>
      </Row>
      <Row>
        <Col sm={12} className={styles.titleTwoRound + " text-center my-5"}>
          <h2>Frequently Asked Questions</h2>
        </Col>
        <Col sm={6} className="d-flex align-items-center">
          <div>
            <Image src={gfx} className="w-100 h-100" alt="FCFS ROUND" />
          </div>
        </Col>
        <Col sm={6} className={styles.roundTwoDescription}>
          <p>
            In round 2, the unsold tokens from the first round are made available on a FCFS basis,
            only to guaranteed tiers (Platinum and above). These members can purchase an additional
            amount that is determined by a tier-based formula. This round is open until all tokens
            are sold, typically lasting for only a few minutes. After all the tokens are sold, the
            IDO is concluded.
          </p>
          <p>
            <strong className="mb-5">
              WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE IDO STRUCTURE IN ORDER TO OPTIMIZE
              THE SYSTEM OVER TIME AS WELL AS TAKING INTO CONSIDERATION COMMUNITY FEEDBACK AND
              POTENTIAL DAO PROPOSALS.
            </strong>
          </p>
          <p>
            Our system is a predictable and provably fair system giving our users the proper
            incentives to accumulate and hold tokens and support each and every project launched.
            Over time, we will tweak weights, add new tiers and change other parameters as necessary
            to keep the system functional, competitive and rewarding for all community members.
          </p>
          <p>
            $ROIPad is the next evolution of blockchain launchpads solving the fundamental flaws
            that plague existing launchpads. This platform benefits all holders of the token and
            allows for fair launches giving traders of all sizes the opportunity to invest in the
            best upcoming Binance Smart Chain projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
