import React from "react";

export default function FoodCard({ food }) {
  const { name, category, imageUrl } = food;
  return (
    <div className="rounded-lg w-[fit-content] overflow-hidden mx-auto shadow-sm">
      <img
        className="w-[320px] block"
        src={process.env.PUBLIC_URL + `${imageUrl}`}
        alt={name}
      />
      <p className="text-center bg-primary-light py-4 text-xl">
        {name} ({category})
      </p>
    </div>
  );
}
