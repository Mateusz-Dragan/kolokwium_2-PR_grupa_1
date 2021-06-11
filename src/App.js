import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/MateuszDraganhome"
import NavBar from "./components/MateuszDragannavbar";

function App() {

  return (
      <div className="container-fluid">
          <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/posts" exact component={Posts} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
