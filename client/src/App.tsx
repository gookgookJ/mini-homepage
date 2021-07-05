import "./App.css";
import Landing from "./pages/Landing";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
};

export default hot(module)(App);
