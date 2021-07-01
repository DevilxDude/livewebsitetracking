import React from "react";
import Heading from "../../component/Heading";
import SingleWebsite from "../SingleWebsite";
import "./style.css";

function WebsiteList() {
  return (
    <div className="container">
      <Heading color="blue">WEBSITES</Heading>
      <div className="website-list">
        <SingleWebsite />
        <SingleWebsite />

        <SingleWebsite />

      </div>
    </div>
  );
}

export default WebsiteList;
