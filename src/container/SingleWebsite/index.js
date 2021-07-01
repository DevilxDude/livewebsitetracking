import Heading from "../../component/Heading";
import Button from "../../component/Button";
import Link from "../../component/Link";
import "./style.css";

const isLive = true;

function SingleWebsite() {
  return (
    <div className="row vertical-center website-container">
      <div className={`website-name ${!isLive ? " error-border" : ""}`}>
        <Heading>Website name here</Heading>
        <Link url={"www.google.com"} isLive={isLive} />
      </div>
      <div className="row vertical-center">
        <div className="text-muted">Last Checked: 5 minutes ago</div>
        <Button color={isLive ? "green" : "red"} size="normal">
          LIVE
        </Button>
      </div>
    </div>
  );
}

export default SingleWebsite;
