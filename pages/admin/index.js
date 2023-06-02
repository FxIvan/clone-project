//Admin page just says hello

import React from "react";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  const validateToken = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.post("/api/validateToken", {
        token,
      });
      console.log(res);
      if (res.status === 200) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className={""}></div>
      <h1>Admin Page</h1>
    </Container>
  );
};

AdminPage.displayName = "AdminPage";

export default AdminPage;
