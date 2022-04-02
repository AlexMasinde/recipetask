import { createContext, useContext, useEffect, useState } from "react";
import { foods } from "../utils/foods";

const FiltersContext = createContext();

export function useFilters() {
  return useContext(FiltersContext);
}

export default function FiltersContextProvider({ children }) {
  const [filters, setFilters] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredFoods(foods);
      return;
    }
    setFilteredFoods(foods.filter((food) => filters.includes(food.category)));
  }, [filters]);

  const value = {
    filters,
    setFilters,
    filteredFoods,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}
