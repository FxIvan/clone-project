import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
export default function RoundOne() {
  const allocationRoundOne = [
    {
      title: "Bronze",
      stackReq: "1000",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "Like, Comment & Retweet",
      lotteryTicket: "1",
    },
    {
      title: "Silver",
      stackReq: "2500",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "Like, Comment & Retweet",
      lotteryTicket: "3",
    },
    {
      title: "Gold",
      stackReq: "5000",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "Like, Comment & Retweet",
      lotteryTicket: "7",
    },
    {
      title: "Platinum",
      stackReq: "1000",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "None",
      guarantedAllocation: "Yes",
      poolWeight: "10",
    },
    {
      title: "Diamond",
      stackReq: "25000",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "None",
      guarantedAllocation: "Yes",
      poolWeight: "30",
    },
    {
      title: "Blue Diamond",
      stackReq: "75000",
      stackLenReq: "3 hours before Allocation Round opens",
      whiteListReqTwit: "None",
      guarantedAllocation: "Yes",
      poolWeight: "60 + Private Allocations",
    },
  ];

  return (
    <Container>
      <Row className={styles.titleRound + " text-center mt-5 mb-3"}>
        <h2>ROUND 1 - ALLOCATION ROUND</h2>
      </Row>
      <Row>
        {allocationRoundOne.map((item, index) => {
          return (
            <Col sm={4} key={index}>
              <div className={styles.containerCard + " text-center m-3 py-4"}>
                <div className={styles.divTitle}>
                  <h3 className="mb-4">{item.title}</h3>
                </div>
                <div className={styles.containerList}>
                  <ul className="my-3">
                    {/* */}
                    <li>Stack Requirement:</li>
                    <li>
                      <span id={styles.price}>{item.stackReq}</span>
                    </li>
                    {/* */}
                    <li>Stack Length Requirement:</li>
                    <li className="mb-4">
                      <span>{item.stackLenReq}</span>
                    </li>
                    {/* */}
                    <li>Whitelist Requirement Twitter:</li>
                    <li className="mb-4">
                      <span>{item.whiteListReqTwit}</span>
                    </li>
                    {/* */}
                    {item.guarantedAllocation ? (
                      <>
                        <li>Guaranteed Allocation:</li>
                        <li className="mb-4">
                          <span>{item.guarantedAllocation}</span>
                        </li>
                      </>
                    ) : null}
                    {/* */}
                    {item.lotteryTicket ? (
                      <>
                        <li>Lottery Tickets:</li>
                        <li className="mb-4">
                          <span>{item.lotteryTicket}</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>Pool Weight:</li>
                        <li className="mb-4">
                          <span>{item.poolWeight}</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
