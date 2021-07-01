import { memo } from "react";
import { useSelector } from "react-redux";
import "./style.css";

function WebsiteCount() {
  const websites = useSelector((state) => state.WebsiteReducer.websites);

  return (
    <div className="count">Currently Tracking {websites.length} websites</div>
  );
}

export default memo(WebsiteCount);
