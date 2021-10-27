import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        {/* LINKS  */}
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
