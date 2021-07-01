import { useState, useEffect } from "react";
import Input from "../../component/Input";
import "./style.css";
import validateUrl from "../../library/validateUrl";
import Button from "../../component/Button";

function WebsiteInput() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    if (websiteURL && !validateUrl(websiteURL) && !invalid) {
      setInvalid(true);
    } else if (!websiteURL || (validateUrl(websiteURL) && invalid)) {
      setInvalid(false);
    }
  }, [invalid, websiteURL]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(websiteURL);
  }

  return (
    <form id="input-container" className="container" onSubmit={handleSubmit}>
      <div className="row">
        <Input state={websiteURL} setState={setWebsiteURL} invalid={invalid} />
        <Button size="large" type="submit" onClick={handleSubmit}>
          ADD WEBSITE
        </Button>
      </div>
    </form>
  );
}

export default WebsiteInput;
