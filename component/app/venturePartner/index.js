import { Button, Col, Container, Row } from "react-bootstrap";
import blueZilla from "../../../public/image/landing/bluezilla-dark.png";
import Image from "next/image";
import styles from "./styles.module.css";
import silkLegal from "../../../public/image/landing/silkLegal.png";
export default function VenturePartner() {
  return (
    <Container>
      <Row className={styles.titleVenturePartner + " text-center mt-5"}>
        <h2>INCUBATOR AND INVESTMENT PARTNER</h2>
      </Row>
      <Row className={styles.containerPartners}>
        <Col sm={12} className="text-center my-5">
          <div className={styles.blueZilla + " p-4"}>
            <Image src={blueZilla} className="my-5" />
            <p>
              We specialize in taking your innovative and new idea from concept
              to completion through our market leading advisory, investment,
              development, influencer marketing and legal support services.
            </p>
            <p>
              We are the only VC with in house developers, designers, marketers,
              influencers, traders, legal and launch pads.
            </p>
            <p>
              We help by not only bringing capital and partners, but every
              aspect of your project from tokenomics to post launch marking.
            </p>
            <Button className={styles.buttonLearnMore + " rounded-pill"}>
              Learn More
            </Button>
          </div>
        </Col>
        <Col sm={12} className="text-center my-5">
          <div className={styles.silkLegal + " p-4"}>
            <Image src={silkLegal} className="w-25 h-50" />
            <p className="mt-4">
              Silk Legal is a boutique law firm specializing in FinTech and
              Cryptocurrency. We combine a deep understanding of blockchain
              technology with an expert knowledge of international regulations
              to analyze issues, risks and opportunities. Silk Legal is a proud
              member of Global Digital Finance, the leading global association
              of digital asset companies advocating for and accelerating the
              adoption of best practices for digital assets.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
