import "./App.css";
import Main from "./Components/Main/Main";
import Star from "./Components/Starratings/Star";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/star-rating" element={<Star />} />
      </Routes>
    </div>
  );
}

export default App;
