import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
