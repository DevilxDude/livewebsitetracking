import PropTypes from "prop-types";
import getClickableLink from "../../library/getClickableLink";
import "./style.css";

function Link({ url, isLive }) {
  return (
    <a
      className="link"
      href={getClickableLink(url)}
      target="_blank"
      disabled={!isLive}
      rel="noreferrer"
    >
      {url}
    </a>
  );
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Link;
