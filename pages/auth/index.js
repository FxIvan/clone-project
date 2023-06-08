//simple auth form
import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";
import secureLocalStorage from "react-secure-storage";

const axios = require("axios").default;

const AuthPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("/api/login", {
        username,
        password,
      });

      if (res.status === 200) {
        secureLocalStorage.setItem("secretOrPrivateKey", res.data.secretOrPrivateKey);
        router.push("/admin");
      }
    } catch (error) {}
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

AuthPage.displayName = "AuthPage";

export default AuthPage;
