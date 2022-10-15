import "./App.css";
import Login from "./components/Login/Login";
import MainNavigation from "./components/Navigation/MainNavigation";
import Navlinks from "./components/Navigation/Navlinks";
import CalendarInfo from "./components/Calendar/CalendarInfo";

function App() {
  return (
    <div>
      <MainNavigation />
      <CalendarInfo />
    </div>
  );
}

export default App;
