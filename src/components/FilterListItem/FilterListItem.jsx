import React from "react";
import { useFilters } from "../../contexts/filterContext";

export default function FoodListItem({ category }) {
  const { name } = category;
  const { filters, setFilters } = useFilters();
  const filtered = filters.includes(name);

  function handleFilterSelect() {
    if (filtered) {
      setFilters(filters.filter((filter) => filter !== name));
    } else {
      setFilters([...filters, name]);
    }
  }

  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="w-6 h-6 focus:ring-0 text-primary-main border-1 border-gray-100 cursor-pointer"
          checked={filtered}
          onChange={handleFilterSelect}
        />
        <span className="ml-2 text-sm">{name.toUpperCase()}</span>
      </label>
    </div>
  );
}
