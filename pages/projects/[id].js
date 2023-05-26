import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";

export default function TokenInfo() {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <h1> {router.query.id} </h1>
      </Row>
    </Container>
  );
}
