import "./App.css";
import Home from "./Components/Dashboard/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./Components/Forms/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="App">
          <Route path="/register" component={Form}></Route>
          <Route exact path="/" component={Home}></Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
