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
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );

  tokens.map((token) => {
    if (token.token_status === "active") {
      activeTokens.push(token);
    } else if (token.token_status === "coming_soon") {
      comingSoonTokens.push(token);
    } else if (token.token_status === "closed") {
      closedTokens.push(token);
    }
  });

  return (
    <>
      <div className={styles.backgroundImage}></div>
      {sections.map((section) => (
        <Section title={section.title} data={section.data} key={section.data.title} />
      ))}
    </>
  );
};
export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:8000/api/tokens", { responseType: "json" })).data;
  const tokens = await res;
  return {
    props: {
      tokens: tokens.tokens,
    },
  };
};

StakingPage.displayName = "StakingPage";

export default StakingPage;
