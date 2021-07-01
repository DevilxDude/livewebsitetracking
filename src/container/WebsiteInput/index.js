import { useState, useEffect } from "react";
import Input from "../../component/Input";
import validateUrl from "../../library/validateUrl";
import Button from "../../component/Button";
import { useDispatch } from "react-redux";
import "./style.css";

import { addWebsiteAction } from "../../redux/actions/websiteactions";

function WebsiteInput() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [invalid, setInvalid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (websiteURL && !validateUrl(websiteURL) && !invalid) {
      setInvalid(true);
    } else if (!websiteURL || (validateUrl(websiteURL) && invalid)) {
      setInvalid(false);
    }
  }, [invalid, websiteURL]);

  function handleSubmit(event) {
    event.preventDefault();
    if (invalid) return alert("Please enter a valid URL");
    dispatch(addWebsiteAction(websiteURL));
    setWebsiteURL("");
  }

  return (
    <form id="input-container" className="container" onSubmit={handleSubmit}>
      <div className="row">
        <Input state={websiteURL} setState={setWebsiteURL} invalid={invalid} />
        <Button color="blue" size="large" type="submit" onClick={handleSubmit}>
          ADD WEBSITE
        </Button>
      </div>
    </form>
  );
}

export default WebsiteInput;
