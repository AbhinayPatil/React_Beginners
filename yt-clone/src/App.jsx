import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// -----------------------------------
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  const [sidebar,setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}></Route>
        <Route path="/Video/:categoryId/:videoId" element={<Video />}></Route>
      </Routes>
    </div>
  );
};

export default App;
