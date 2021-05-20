import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>

        <Route path="/" exact component={ Home } />
        <Route path="/cart" exact component={ Cart } />
        <Route path="/auth" exact component={ Login } />
        <Route path="/details/:id" exact component={ Details } />
      </Router>

    </>
  );
}

export default App;

