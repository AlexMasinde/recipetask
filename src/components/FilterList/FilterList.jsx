import React, { useState } from "react";

import FilterListItem from "../FilterListItem/FilterListItem";

import { foodCategories } from "../../utils/foodCategories";

export default function FilterList() {
  const [showList, setShowList] = useState(false);

  function handleList() {
    setShowList(!showList);
  }

  return (
    <div className="mt-4">
      <div
        onClick={handleList}
        className="border p-2 w-[fit-content] border-gray-300 text-sm cursor-pointer"
      >
        <p>CATEGORIES</p>
      </div>
      {showList && (
        <div className="mt-4 absolute z-50">
          {foodCategories.map((category) => {
            return <FilterListItem category={category} />;
          })}
        </div>
      )}
    </div>
  );
}
