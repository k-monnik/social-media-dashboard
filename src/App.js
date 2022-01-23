import Header from "./components/Header";
import UpperGrid from "./components/UpperGrid";
import LowerGrid from "./components/LowerGrid";



function App() {
  return (
    <div className="container mx-auto px-4 box-border w-[375px] md:w-[1440px] border-4 border-lime"
    >
      <Header />
      <UpperGrid />
      <LowerGrid />

    </div>
  );
}

export default App;
