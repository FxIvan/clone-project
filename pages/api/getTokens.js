import axios from "axios";

//GET ALL PROJECTS
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      //const response = await axios.get("http://localhost:6000/api/tokens/", req.body);
      //res.status(response.status).json(response.data);
      res.status(200).json({ message: "Hello" });
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
