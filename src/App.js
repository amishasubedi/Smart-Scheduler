import { Calendar } from "react-calendar";
import "./App.css";
import Login from "./components/Login/Login";
import MainNavigation from "./components/Navigation/MainNavigation";
import Navlinks from "./components/Navigation/Navlinks";

function App() {
  return (
    <div>
      {/* <MainNavigation />
      <Login /> */}
      <Calendar />
    </div>
  );
}

export default App;
