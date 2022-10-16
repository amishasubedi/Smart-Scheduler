import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Calendar from "./pages/Calendar";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <MainNavigation />

      <main>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>

          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/calendar">
            <Calendar />
          </Route>

          <Route path="/error">
            <ErrorPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    // <div>
    //   <MainNavigation />
    //   <Calendar />
    // </div>
  );
}

export default App;
