import "./style.css";
import PropTypes from "prop-types";

function Heading({ color, children }) {
  return <div className={`heading ${color ? color : ""}`}>{children}</div>;
}

Heading.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Heading;
