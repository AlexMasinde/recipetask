import React from "react";
import { useFilters } from "../../contexts/filterContext";
import removeFilterIcon from "../../icons/close.svg";

export default function FilterTag({ filter }) {
  const { setFilters } = useFilters();

  function handleRemoveFilter() {
    setFilters((filters) =>
      filters.filter((currentFilter) => currentFilter !== filter)
    );
  }

  return (
    <div className="flex items-center bg-primary-dark text-white rounded-md py-[6px] px-2 ml-2 text-xs w-[fit-content] mb-2 md:text-base md:mb-0">
      <p>{filter.toUpperCase()}</p>
      <img
        className="cursor-pointer ml-2 w-3 h-3 md:w-4 md:h-4"
        src={removeFilterIcon}
        alt="remove filter"
        onClick={handleRemoveFilter}
      />
    </div>
  );
}
