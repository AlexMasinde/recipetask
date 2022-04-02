import React, { useState } from "react";
import { useFilters } from "../../contexts/filterContext";

import FilterListItem from "../FilterListItem/FilterListItem";

import { foodCategories } from "../../utils/foodCategories";
import SelectedFilters from "../SelectedFilters/SelectedFilters";

import arrowUp from "../../icons/arrow-up.svg";
import arrowDown from "../../icons/arrow-down.svg";

export default function FilterList() {
  const [showList, setShowList] = useState(false);
  const { filters } = useFilters();

  const filtersAvailable = filters.length > 0;

  function handleList() {
    setShowList(!showList);
  }

  return (
    <div className="mt-4">
      <div className=" flex flex-col md:items-center md:flex-row">
        <div
          onClick={handleList}
          className="border p-1 w-[fit-content] border-gray-300 text-sm cursor-pointer rounded-md flex items-center order-2 ml-2 md:order-1 md:ml-0 lg:p-2"
        >
          <p>CATEGORIES</p>
          <img
            className="ml-6 w-6 h-6"
            src={showList ? arrowUp : arrowDown}
            alt="arrow"
          />
        </div>
        <div className="order-1 md:order-2 mb-2 md:mb-0">
          {filtersAvailable && <SelectedFilters />}
        </div>
      </div>
      {showList && (
        <div className="mt-4 absolute z-50 bg-white px-4 rounded-b-md md:px-3">
          {foodCategories.map((category) => {
            return (
              <FilterListItem
                category={category}
                key={category.id}
                setShowList={setShowList}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
