import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
