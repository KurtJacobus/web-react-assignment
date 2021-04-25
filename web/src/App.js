import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Brewers from "./components/Brewers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
           </Route>
          <Route path="/create">
            <Recipes />
          </Route>
          <Route path="/brewers">
            <Brewers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
