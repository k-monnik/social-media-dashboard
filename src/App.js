
import Header from "./components/Header";
import UpperGrid from "./components/UpperGrid";
import LowerGrid from "./components/LowerGrid";

function App() {

  return (
    <div className="mx-auto w-full h-screen dark:bg-dark-400"
    >
      <Header />
      <div>

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
