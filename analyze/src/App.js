import "./Style.css";
import Navigation from "./Navigation";
import Analysis from "./Analysis";
import Report from "./Report";
import Delete from "./Delete";
import Upload from "./Upload";
import Zoominout from "./Zoominout";

function App() {
  return (
    <div>
      <div className="nav">
        <Navigation />
      </div>
      <div className="image">
        <div>
          <Upload />
          <Delete />
          <Analysis />
          <Report />
        </div>
      </div>
      <div>
        <Zoominout />
      </div>
    </div>
  );
}

export default App;
