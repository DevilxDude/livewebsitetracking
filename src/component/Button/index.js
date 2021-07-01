import PropTypes from "prop-types";
import "./style.css";

function Button({
  type = "button",
  color = "blue",
  size = "normal",
  onClick,
  children,
}) {
  return (
    <button className={`button ${color} ${size}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
