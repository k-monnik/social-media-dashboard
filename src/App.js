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
      <footer>
        <p class="text-xs font-thin text-medGrey dark:text-dark-100 pb-4 text-center"><a href="https://www.monnik.dev/">© 2022 Kristen Monnik</a>
        </p>
      </footer>


    </div>
  );
}

export default App;
