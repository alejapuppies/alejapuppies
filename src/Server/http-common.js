import axios from "axios";

export default axios.create({
  baseURL: "https://alejapuppiesback.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});