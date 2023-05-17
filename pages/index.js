import { Container } from "react-bootstrap";
import Layout from "../component/layout";
import videoBackground from "../public/video/redLazos.mp4";
import styles from "./styles.module.css";
import HomeBanner from "../component/app/homeBanner";
import HomeButton from "../component/app/homeButton";
import ProfileButton from "../component/app/profileButton";
import OurPartners from "../component/app/ourPartners";
import AboutUs from "../component/app/aboutUs/aboutUs";
import TieredSystem from "../component/app/tieredSystem";
import RoundOne from "../component/app/roundOne";
import RoundTwo from "../component/app/roundTwo";
import VenturePartner from "../component/app/venturePartner";
import Contact from "../component/app/contact";

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
        <div>
          <HomeBanner />
          <HomeButton />
          <ProfileButton />
          <OurPartners />
          <AboutUs />
          <TieredSystem />
          <RoundOne />
          <RoundTwo />
          <VenturePartner />
          <Contact />
        </div>
      </Container>
    </Container>
  );
}
