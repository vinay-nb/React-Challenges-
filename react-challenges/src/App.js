import "./App.css";
import AppAccordion from "./Components/Accordion/AppAccordion";
import BackgroundChanger from "./Components/BackgroundChanger/BackgroundChanger";
import ChangeTheme from "./Components/ChangeTheme/ChangeTheme";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Main from "./Components/Main/Main";
import Star from "./Components/Starratings/Star";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/star-rating" element={<Star />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/accordion" element={<AppAccordion />} />
        <Route path="/background-changer" element={<BackgroundChanger />} />
        <Route path="/change-theme" element={<ChangeTheme />} />

      </Routes>
    </div>
  );
}

export default App;
