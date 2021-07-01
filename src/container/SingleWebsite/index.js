import { useEffect, memo, useState, useCallback } from "react";
import Heading from "../../component/Heading";
import Button from "../../component/Button";
import Link from "../../component/Link";
import { useDispatch } from "react-redux";
import { recheckWebsiteAction } from "../../redux/actions/websiteactions";
import "./style.css";

function diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

function SingleWebsite({ website }) {
  const { title, url, isLoading, isLive, lastChecked } = website;
  const [time, setTime] = useState(new Date());
  const timeDifference = diff_minutes(new Date(lastChecked), new Date(time));
  const dispatch = useDispatch();

  const recheckWebsite = useCallback(() => {
    dispatch(recheckWebsiteAction(website));
  }, [dispatch, website]);

  useEffect(() => {
    if (timeDifference >= 5) {
      recheckWebsite();
    }
    const interval = setInterval(() => setTime(Date.now()), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, timeDifference, time, recheckWebsite]);

  return (
    <div className="row vertical-center website-container">
      <div
        className={`website-name ${
          !isLive && !isLoading ? " error-border" : ""
        }`}
      >
        <Heading>{title}</Heading>
        <Link url={url} isLive={isLive} />
      </div>
      <div className="row vertical-center actions">
        <div className="text-muted last-checked">
          Last Checked: {timeDifference} minutes ago
        </div>
        <Button
          color={isLoading ? "cyan" : isLive ? "green" : "red"}
          size="normal"
          onClick={recheckWebsite}
        >
          {isLoading ? "FETCHING" : isLive ? "LIVE" : "ERROR"}
        </Button>
      </div>
    </div>
  );
}

export default memo(SingleWebsite);
