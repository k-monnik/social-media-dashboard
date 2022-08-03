//import React, { useState } from "react";
import Header from "./components/Header";
import UpperGrid from "./components/UpperGrid";
import LowerGrid from "./components/LowerGrid";
// import Test from "./components/Test";




function App() {
  // const [content, setContent] = useState(
  // );


  return (
    <div className="mx-auto w-full dark:bg-dark-400"
    >
      <Header />
      <div>

        {/* <Test /> */}

        <UpperGrid />
        <LowerGrid />
      </div>


    </div>
  );
}

export default App;
