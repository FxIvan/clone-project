import { Container } from "react-bootstrap";
import Layout from "../../component/layout";
import ProjectOpenNow from "../../component/app/projectOpenNow";
import ProjectComingSoon from "../../component/app/projectComingSoon";
import styles from "./styles.module.css";

const StakingPage = () => {
  return (
    <>
      <div className={styles.backgroundImage}></div>
      <ProjectOpenNow />
      <ProjectComingSoon />
    </>
  );
};

StakingPage.displayName = "StakingPage";

export default StakingPage;
