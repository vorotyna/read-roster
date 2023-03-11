import React from "react";

function Navbar() {
  return (
    // Position: Sticky needs to be revised to position:fixed, but currently I cannot get it to work properly
    <nav className="flex flex-row items-baseline justify-between border-b-2 pb-4 sticky top-0 m-0 bg-white pt-10">
      <section className="">
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
