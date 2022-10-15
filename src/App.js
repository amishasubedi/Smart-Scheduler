import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Login />
    </div>
  );
}

export default App;
