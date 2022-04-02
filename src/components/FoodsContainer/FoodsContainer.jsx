import React from "react";
import { useFilters } from "../../contexts/filterContext";
import FoodCard from "../FoodCard/FoodCard";

export default function FoodCardContainer() {
  const { filteredFoods: foods } = useFilters();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] my-6">
      {foods.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}
    </div>
  );
}
