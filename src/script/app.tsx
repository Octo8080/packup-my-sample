import React from "https://esm.sh/react@17.0.2";
import ReactDOM from "https://esm.sh/react-dom@17.0.2";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "https://esm.sh/react-router-dom@5.2.0";

import Home from "./component/home.tsx";
import Counter from "./component/counter.tsx";

function App() {
  return (
    <Router>
      <div class="container">
        <div class="row nav">
          <div class="two columns">
            <Link to="/">Home</Link>
          </div>
          <div class="two columns">
            <Link to="/counter">Counter</Link>
          </div>
        </div>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function main() {
  ReactDOM.render(React.createElement(App), document.querySelector("#app"));
}

addEventListener("DOMContentLoaded", () => {
  main();
});
