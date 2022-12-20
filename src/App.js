import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmInfo from "./components/FilmInfo/FilmInfo.js";
import Library from "./components/Library/Library.js";
import Navbar from "./components/Navbar/Navbar.js";
import GlobalStyled from "./globalStyle/globalStyle.js";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyled />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Library />} />
          <Route path='/film/:id' exact element={<FilmInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
