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
import Stack from "./Components/Stack/Stack";
import WordCount from "./Components/WordCount/WordCount";
import TemparatureConverter from "./Components/TemparatureConverter/TemparatureConverter";
import TelephoneFormatter from "./Components/TelephoneFormatter/TelephoneFormatter";
import StringTransformers from "./Components/StringTransformers/StringTransformers";
import Tictaktoe from "./Components/Tictaktoe/Tictaktoe";
import ExpensesTracker from "./Components/ExpensesTracker/ExpensesTracker";
import TrafficLights from "./Components/TrafficLights/TrafficLights";
import ModalPopup from "./Components/ModalPopup/ModalPopup";
import PasswordStrength from "./Components/PasswordStrength/PasswordStrength";
import ColumnTable from "./Components/ColumnTable/ColumnTable";

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
        <Route path="/stack" element={<Stack />} />
        <Route path="/word-count" element={<WordCount />} />
        <Route path="/convert-temparature" element={<TemparatureConverter />} />
        <Route path="/telephone-formatter" element={<TelephoneFormatter />} />
        <Route path="/string-transformers" element={<StringTransformers />} />
        <Route path="/tictaktoe" element={<Tictaktoe />} />
        <Route path="/expenses-tracker" element={<ExpensesTracker />} />
        <Route path="/traffic-lights" element={<TrafficLights />} />
        <Route path="/modal-popup" element={<ModalPopup />} />
        <Route path="/password-strength" element={<PasswordStrength />} />
        <Route path="/column-table" element={<ColumnTable />} />
      </Routes>
    </div>
  );
}

export default App;
