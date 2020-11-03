import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Music from "../Music/Music";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className="showcase">
        <div className="content">
          <h1 className="heading">Go Premium. Be happy.</h1>
          <button className="btn">START FREE TRIAL</button>
        </div>
      </div>
      {/* Music */}
      <Music />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
