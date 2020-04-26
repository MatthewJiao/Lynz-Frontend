import React from "react";
/*import "bootstrap/dist/css/bootstrap.min.css"; */
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import NavbarComp from "./components/NavbarComp.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <NavbarComp />
        <br></br>
        <Route exact path="/Lynz-Frontend" render={() => <Redirect to="/" />} />
        <Route path="/" exact component={Homepage} />
        <Route path="/busyness" component={Viewpage} />
        <Route path="/submit" component={Submitpage} />
      </div>
    </Router>
  );
}
export default App;