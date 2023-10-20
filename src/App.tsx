import React from 'react';
import {Routes, Route} from "react-router-dom";
import FavouritePage from "./pages/favourite-page";
import HomePage from "./pages/home-page";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/favourites" element={<FavouritePage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
