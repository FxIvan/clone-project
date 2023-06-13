import React, { useState,  useEffect, } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "notezipper");
      formData.append("safelifedev-com", "safelifedev-com");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/safelifedev-com/image/upload",
        formData
      );

      console.log("Image URL:", res.data.secure_url);
      // Aquí puedes realizar las acciones adicionales con la URL de la imagen subida

      setSelectedImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect( () => {
    try {
      const token = secureLocalStorage.getItem("token");

      if (token) {
        router.push("/admin");
      } else {
        router.push("/login");
      }
    } catch (error) {
      router.push("/auth");
    }
  }, []
  )


  return (
    <Container>
      <div className={""}></div>
      <h1>Admin Page</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <button onClick={handleImageUpload}>Upload Image</button>
    </Container>
  );
};

AdminPage.displayName = "AdminPage";

export default AdminPage;
