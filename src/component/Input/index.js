import PropTypes from "prop-types";
import "./style.css";

function Input({ state, setState, invalid }) {
  function handleChange(event) {
    setState(event.target.value);
  }

  return (
    <div className="full-width">
      <input
        className={`input ${invalid ? "invalid" : ""}`}
        type="text"
        placeholder="Input with URL Validation"
        value={state}
        onChange={handleChange}
      />
      <div className="invalid-error" role="alert">
        {invalid && "Please enter a valid url."}
      </div>
    </div>
  );
}

Input.propTypes = {
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Input;
