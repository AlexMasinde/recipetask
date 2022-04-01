import React from "react";
import testfoodphoto from "../../assets/images/vegan1.jpeg";

export default function FoodCard({ food }) {
  const { name, category } = food;
  return (
    <div className="rounded-md w-[fit-content] overflow-hidden">
      <img className="w-[268px] block" src={testfoodphoto} alt={name} />
      <p className="text-center bg-primary-light py-4">
        {name} ({category})
      </p>
    </div>
  );
}
