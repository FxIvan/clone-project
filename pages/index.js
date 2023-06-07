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
import Card from "../component/app/card";

import axios from "axios";
import tiers from "/data/tiers";
import TierCard from "/component/app/tierCard";

export default function Home({ tokens }) {
  return (
    <Container fluid className="p-0 mb-5 bg-dark">
      <Container className={styles.containerLanding + ""}>
        <div className="d-sm-none d-md-block d-md-none d-lg-block d-none d-sm-block d-lg-none d-xl-block">
          <HomeBanner />
          {/* <HomeButton /> */}
          <ProfileButton />
          {/* <OurPartners /> */}
          <Container>
            <Row className={styles.titleRound + " text-center mt-5 mb-3"}>
              <h2 className={styles.textBf}>PROJECTS</h2>
            </Row>
            <Row className={"d-flex justify-content-between"}>
              {tokens.map((token, index) => {
                return (
                  <Card
                    id={token.token_id}
                    tittle={token.name}
                    description={token.description}
                    participant={0}
                    projectStatus={
                      token.token_status === "active"
                        ? true
                        : token.token_status === "coming_soon"
                        ? true
                        : token.token_status === "closed"
                        ? false
                        : true
                    }
                    swapRate={token.ticker}
                    cap={token.ticker}
                    key={token.token_id}
                  />
                );
              })}
            </Row>
          </Container>
        </div>
      </Container>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:6000/api/tokens", { responseType: "json" })).data;
  const tokens = await res;
  return {
    props: {
      tokens: tokens?.tokens,
    },
  };
};
