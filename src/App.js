// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "../src/api/api";
// Styles
import "./App.css";
// Components
import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/LoginPage";
import SignUp from "./pages/signUpPage/SignUp";
import CreateNewProject from "./pages/newPage/CreateNewProject";
import CreateNewProject_1 from "./pages/newPage/newPage_1/CreateNewProject_1";
import PendingConfirmation from "./pages/pending/PendingConfirmation";
import PendingDetail from "./pages/pending/PendingDetail";
import AwaitingProjects from "./pages/AwaitingProjects";
import PreviousProjects from "./pages/PreviousProjects";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/home" exact component={Home} />
          <Route path="/new" exact component={CreateNewProject} />
          <Route path="/new/request" exact component={CreateNewProject_1} />
          <Route path="/pending" exact component={PendingConfirmation} />
          <Route path="/detail/:_id" exact component={PendingDetail} />
          <Route path="/awaiting" exact component={AwaitingProjects} />
          <Route path="/previous" exact component={PreviousProjects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
