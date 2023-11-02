import "./App.css";
import AppAccordion from "./Components/Accordion/AppAccordion";
import BackgroundChanger from "./Components/BackgroundChanger/BackgroundChanger";
import ChangeTheme from "./Components/ChangeTheme/ChangeTheme";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Main from "./Components/Main/Main";
import QRGenerator from "./Components/QRGenerator/QRGenerator";
import Star from "./Components/Starratings/Star";
import { Route, Routes } from "react-router-dom";
import TableColorizer from "./Components/TableColorizer/TableColorizer";
import GuessNumber from "./Components/GuessNumber/GuessNumber";
import Pagination from "./Components/Pagination/Pagination";

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
        <Route path="/qr-generator" element={<QRGenerator />} />
        <Route path="/table-colorizer" element={<TableColorizer />} />
        <Route path="/guess-number" element={<GuessNumber />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
