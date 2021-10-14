import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
// import Footer from "./Components/Footer";
import Main from "./Components/pages/Main";
import Projects from "./Components/pages/Projects";
import Contact from "./Components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
