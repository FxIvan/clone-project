import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "../../component/app/card";
const axios = require("axios").default;

const StakingPage = ({ tokens }) => {
  // Fer filter status 3 variables
  const activeTokens = tokens.filter((token) => token.status === "active");
  const comingSoonTokens = tokens.filter((token) => token.status === "coming_soon");
  const closedTokens = tokens.filter((token) => token.status === "closed");

  const sections = [
    {
      title: "PROJECTS OPEN NOW",
      data: activeTokens,
    },
    {
      title: "PROJECTS COMING SOON",
      data: comingSoonTokens,
    },
    {
      title: "PROJECTS CLOSED",
      data: closedTokens,
    },
  ];

  const Section = ({ title, data }) => (
    <Container>
      <Row>
        <Col sm={12} className={styles.projectComingSoon + " text-center"}>
          <h2>{title}</h2>
        </Col>
        <Col sm={12}>
          <Row className="d-flex justify-content-between">
            {data.map((token) => (
              <Card
                tittle={token.name}
                description={token.description}
                participant={0}
                projectStatus={true}
                swapRate={token.ticker}
                cap={token.ticker}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );

  return (
    <>
      <div className={styles.backgroundImage}></div>
      {sections.map((section) => (
        <Section title={section.title} data={section.data} />
      ))}
    </>
  );
};
export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:6000/api/tokens", { responseType: "json" })).data;
  const tokens = await res;
  console.log(tokens);
  return {
    props: {
      tokens: tokens.tokens,
    },
  };
};

StakingPage.displayName = "StakingPage";

export default StakingPage;
