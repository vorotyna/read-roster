import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row mt-14 items-baseline justify-between border-b-2 pb-4">
      <section>
        <h1 className="text-4xl cursor-pointer">
          read<span className="mx-0 font-bold c text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      <section className="flex flex-row items-center">
      <h2 className="text-2xl mr-20 cursor-pointer">
          my books
        </h2>
      <h2 className="text-2xl mr-20 cursor-pointer">
          due dates
        </h2>
        <h2 className="text-2xl bg-[#ff293ef2] rounded-full px-8 cursor-pointer mr-0 py-1">
          login
        </h2>
      </section>
    </nav>
  );
}

export default Navbar;
