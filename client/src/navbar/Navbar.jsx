import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row mt-14 items-baseline justify-between">
      <section>
        <h1 className="text-4xl cursor-pointer">
          read<span className="mx-0 font-bold c text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      <section className="flex flex-row">
      <h2 className="text-2xl mr-20 cursor-pointer">
          my books
        </h2>
      <h2 className="text-2xl mr-20 cursor-pointer">
          due dates
        </h2>
        <h2 className="text-2xl mr-20 bg-[#ff293ef2] rounded-full px-8 cursor-pointer">
          login
        </h2>
      </section>
    </nav>
  );
}

export default Navbar;
