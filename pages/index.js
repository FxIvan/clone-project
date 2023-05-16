import { Container } from "react-bootstrap";
import Layout from "../component/layout";
import videoBackground from "../public/video/redLazos.mp4";
import styles from "./styles.module.css";
import HomeBanner from "../component/app/homeBanner";

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
        </div>
      </Container>
    </Container>
  );
}
