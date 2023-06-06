import { Col } from "react-bootstrap";
import styles from "./styles.module.css";

const tierCard = ({ item, index }) => {
  const TierPoint = ({ title, data }) => {
    return (
      <>
        <li>{title}</li>
        <li className="mb-4">
          <span>{data}</span>
        </li>
      </>
    );
  };

  return (
    <Col sm={4} key={index}>
      <div className={styles.containerCard + " text-center m-3 py-4"}>
        <div className={styles.divTitle}>
          <h3 className="mb-4">{item.title}</h3>
        </div>
        <div className={styles.containerList}>
          <ul className="my-3">
            {}
            {/* */}
            <li>Stack Requirement:</li>
            <li>
              <span id={styles.price}>{item.stackReq}</span>
            </li>
            <TierPoint title={"Stack Length Requirement:"} data={item.stackLenReq} />
            <TierPoint title={"WhiteList Requirement Twitter:"} data={item.whiteListReqTwit} />
            {item.guarantedAllocation ? (
              <TierPoint title={"Guaranteed Allocation:"} data={item.guarantedAllocation} />
            ) : null}
            {item.lotteryTicket ? (
              <TierPoint title={"Lottery Ticket:"} data={item.lotteryTicket} />
            ) : (
              <TierPoint title={"Pool Weight:"} data={item.poolWeight} />
            )}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default tierCard;
