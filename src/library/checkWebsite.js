import axios from "axios";
import getClickableLink from "./getClickableLink";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "http://localhost:5000/";

async function checkWebsite(url) {
  try {
    const request = await axios.get(`${api}?url=${getClickableLink(url)}`);
    return request.data;
  } catch (error) {
    return false;
  }
}

export default checkWebsite;
