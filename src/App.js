import FilterList from "./components/FilterList/FilterList";
import FoodsContainer from "./components/FoodsContainer/FoodsContainer";
import Header from "./components/Header/Header";
import FiltersContextProvider from "./contexts/filterContext";

function App() {
  return (
    <FiltersContextProvider>
      <Header />
      <FilterList />
      <FoodsContainer />
    </FiltersContextProvider>
  );
}

export default App;
