import React from "react";
import { nanoid } from "nanoid";
import { useFilters } from "../../contexts/filterContext";
import FilterTag from "../FilterTag/FilterTag";

export default function SelectedFilters() {
  const { filters } = useFilters();
  return (
    <div className="flex flex-col md:flex-row">
      {filters.map((filter) => {
        return <FilterTag key={nanoid()} filter={filter} />;
      })}
    </div>
  );
}
