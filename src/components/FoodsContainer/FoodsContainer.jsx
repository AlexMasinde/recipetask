import React from "react";
import { useFilters } from "../../contexts/filterContext";
import FoodCard from "../FoodCard/FoodCard";

export default function FoodCardContainer() {
  const { filteredFoods: foods } = useFilters();
  return (
    <div>
      {foods.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}
    </div>
  );
}
