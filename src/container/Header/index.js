import "./style.css";
import Logo from "../../component/Logo";
import WebsiteCount from "../../component/WebsiteCount";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <Logo />
          <WebsiteCount />
        </div>
      </div>
    </div>
  );
}

export default Header;
