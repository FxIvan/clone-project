import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { Container, Row, Col } from "react-bootstrap";
const axios = require("axios").default;
import DetailBanner from "/component/app/detailBanner";
import DetailContent from "/component/app/detailContent";

export default function TokenInfo({ token }) {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <>
      <Container fluid className="text-center bg-dark">
        <DetailBanner token={token?.token} />
      </Container>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const url = `http://localhost:8000/api/tokens/${id}`;
  console.log("url", url);
  console.log("id", id);
  try {
    const response = await axios.get(url, { responseType: "json" });
    const token = response.data;
    console.log("token", token);
    return {
      props: {
        token: token,
      },
    };
  } catch (error) {
    console.error("Error fetching token data:", error);

    return {
      props: {
        token: null,
      },
    };
  }
};
