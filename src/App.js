import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./components/NavBar";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
