import "./App.css";
import Header from "./container/Header";
import WebsiteInput from "./container/WebsiteInput";
import WebsiteList from "./container/WebsiteList";

function App() {
  return (
    <div id="app">
      <Header />
      <WebsiteInput />
      <WebsiteList />
      <div className="container">
        <div className="text-disclaimer">
          This application is a test. It lets users add a list of URLs in local
          storage. Along with the URL it stores the Title of the page returned
          when fetching the contents of the URL. The Application then fetches
          the contents of each URL and checks the response type. If the response
          is 200 OK, it marks the URL as LIVE. If the response when getting the
          contents of the website throws an error, the application highlights
          the errored website in the list. The application does this every 5
          minutes or ON DEMAND when the URL is clicked by the user. On reload,
          the website checks the local storage for the list of websites added
          and loads all of them again.
        </div>
        <div className="text-muted footer-info">
          Built for Cobold Digital by Hammad Akhtar
        </div>
      </div>
    </div>
  );
}

export default App;
