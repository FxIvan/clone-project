import { Container } from "react-bootstrap";
import Layout from "../../component/layout";
import ProjectOpenNow from "../../component/app/projectOpenNow";
import ProjectComingSoon from "../../component/app/projectComingSoon";
import styles from "./styles.module.css";
import ProjectsClosed from "../../component/app/projectsClosed";

const axios = require('axios').default;

const StakingPage = ({tokens}) => {

  // Fer filter status 3 variables
  const activeTokens = tokens.tokens.filter((token) => token.status === "active");
  const comingSoonTokens = tokens.tokens.filter((token) => token.status === "coming_soon");
  const closedTokens = tokens.tokens.filter((token) => token.status === "closed");


  return (
    <>
      <div className={styles.backgroundImage}></div>
      <ProjectOpenNow activeTokens= {activeTokens}/>
      <ProjectComingSoon comingSoonTokens= {comingSoonTokens}/>
      <ProjectsClosed closedTokens= {closedTokens}/>
    </>
  );
};
export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:6000/api/tokens",{responseType: 'json'})).data;
  const tokens = await res;
  console.log(tokens);
  return {
    props: {
      tokens,
    },
  };
};

StakingPage.displayName = "StakingPage";

export default StakingPage;
