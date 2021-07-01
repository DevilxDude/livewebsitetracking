import { memo } from "react";
import Heading from "../../component/Heading";
import SingleWebsite from "../SingleWebsite";
import { useSelector } from "react-redux";
import "./style.css";

function WebsiteList() {
  const websites = useSelector((state) => state.WebsiteReducer.websites);
  return (
    <div className="container">
      <Heading color="blue">WEBSITES</Heading>
      <div className="website-list">
        {websites.map((website) => (
          <SingleWebsite key={website.url} website={website} />
        ))}
      </div>
    </div>
  );
}

export default memo(WebsiteList);
