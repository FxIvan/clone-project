import { Col, Row, Container } from "react-bootstrap";
import Layout from "../component/layout";
import videoBackground from "../public/video/redLazos.mp4";
import styles from "./styles.module.css";
import HomeBanner from "../component/app/homeBanner";
import HomeButton from "../component/app/homeButton";
import ProfileButton from "../component/app/profileButton";
import OurPartners from "../component/app/ourPartners";
import AboutUs from "../component/app/aboutUs/aboutUs";
import TieredSystem from "../component/app/tieredSystem";
import RoundTwo from "../component/app/roundTwo";
import VenturePartner from "../component/app/venturePartner";
import Contact from "../component/app/contact";

import tiers from "/data/tiers";
import TierCard from "/component/app/tierCard";

export default function Home() {
  return (
    <Container fluid className="p-0">
      <video
        autoPlay
        loop
        muted
        src={videoBackground}
        className={styles.videoBackground + " w-100"}
      ></video>
      <Container className={styles.containerLanding}>
        <div className="d-sm-none d-md-block d-md-none d-lg-block d-none d-sm-block d-lg-none d-xl-block">
          <HomeBanner />
          <HomeButton />
          <ProfileButton />
          <OurPartners />
          <AboutUs />
          <TieredSystem />
          {/* Tiers */}
          <Container>
            <Row className={styles.titleRound + " text-center mt-5 mb-3"}>
              <h2 className={styles.textBf}>ROUND 1 - ALLOCATION ROUND</h2>
            </Row>
            <Row>
              {tiers.map((item, index) => {
                return <TierCard key={index} item={item} />;
              })}
            </Row>
          </Container>

          <RoundTwo />
          <VenturePartner />
          <Contact />
        </div>
      </Container>
    </Container>
  );
}
