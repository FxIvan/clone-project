import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post("http://localhost:6000/api/auth/login", req.body);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
