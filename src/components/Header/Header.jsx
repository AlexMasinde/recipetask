import React from "react";

export default function Header() {
  return (
    <header className="bg-primary-light flex flex-col justify-end h-[150px] md:h-[250px]">
      <h1 className="text-primary-dark text-[30px] ml-3 font-extrabold md:text-[60px]">
        Awesome Foods
      </h1>
    </header>
  );
}
