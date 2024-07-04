import React, { useState, useEffect } from "react";
import Loading from "./componants/Loading component/Loading";
import Footer from "./componants/Footer/Footer";
import Main from "./componants/Main/Main";
import Navbar from "./componants/Navbar/Navbar";
import "./App.css";
import News from "./componants/Main/News";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Section3 from "./componants/Main/Section3";
import Contact from "./componants/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
      // Smooth scroll to top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000); // Change to your desired delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App bg-black text-white min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/News" element={<News />} />
            <Route path="/Home" element={<Main />} />
            <Route
              path="/About"
              element={
                <Section3
                  id="section3"
                  heading={"About Us"}
                  para1={
                    "Your premier source for everything automotive. Founded with a passion for cars, our mission is to deliver timely news, insightful reviews, and captivating stories that resonate with enthusiasts worldwide."
                  }
                  para2={
                    "we're committed to excellence in journalism and storytelling. Our team of experienced writers and editors brings you the latest updates from the world of cars, from groundbreaking technologies to iconic classics."
                  }
                />
              }
            />
            <Route
              path="/Contact"
              element={
                <Contact
                  heading={"Get in touch"}
                  para={"Fill in the Form to start a conversation"}
                  address={"Acme Inc, Street, State, Postal Code"}
                  ph={"+44 1234567890"}
                  exgmail={"info@gmail.com"}
                  button={"Submit"}
                />
              }
            />

            <Route path="/" element={<Navigate replace to="/Home" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
