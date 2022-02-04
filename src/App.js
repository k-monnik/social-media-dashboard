//import React, { useState } from "react";
import Header from "./components/Header";
import UpperGrid from "./components/UpperGrid";
import LowerGrid from "./components/LowerGrid";
//import Test from "./components/Test";




function App() {
  // const [content, setContent] = useState(
  // );


  return (
    <div className="container mx-auto px-8 box-border w-[375px] md:w-[1440px] border-4 border-lime"
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
