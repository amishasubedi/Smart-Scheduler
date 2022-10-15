import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import Navlinks from "./components/Navigation/Navlinks";
import CalendarInfo from "./components/Calendar/CalendarInfo";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Calendar from "./pages/Calendar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    // <div>
    //   <MainNavigation />
    //   <LoginPage />
    //   {/* <MainNavigation />
    //   <CalendarInfo /> */}
    // </div>

    // <Router>
    //   <MainNavigation />

    //   <main>
    //     <Switch>
    //       <Route path="/" exact>
    //         <LoginPage />
    //       </Route>

    //       <Route path="calendar">
    //         <Calendar />
    //       </Route>

    //       <Route path="error">
    //         <ErrorPage />
    //       </Route>

    //       <Redirect to="/" />
    //     </Switch>
    //   </main>
    // </Router>
    <div>
      <MainNavigation />
      <Calendar />
    </div>
  );
}

export default App;
