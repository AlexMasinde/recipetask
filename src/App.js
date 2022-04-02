import FilterList from "./components/FilterList/FilterList";
import FoodsContainer from "./components/FoodsContainer/FoodsContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FiltersContextProvider from "./contexts/filterContext";

function App() {
  return (
    <FiltersContextProvider>
      <Header />
      <div className="w-[90vw] mx-auto md:max-w-[956px]">
        <FilterList />
        <FoodsContainer />
      </div>
      <Footer />
    </FiltersContextProvider>
  );
}

export default App;
