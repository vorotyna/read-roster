import React from "react";

function Navbar({ setToken }) {
  const handleLogout = () => {
    setToken(null);
  };

  return (
    // Position: Sticky needs to be revised to position:fixed, but currently I cannot get it to work properly
    <nav className="sticky top-0 z-40 m-0 flex flex-row items-baseline justify-between border-b-2 bg-white pb-4 pt-10">
      <section>
        <h1 className="cursor-pointer text-4xl">
          read<span className="c mx-0 font-bold text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      <section className="flex flex-row items-center">
        <h2 className="mr-20 cursor-pointer text-2xl">my books</h2>
        <h2 className="mr-20 cursor-pointer text-2xl">due dates</h2>
        <button
          className="mr-0 rounded-full bg-[#ff293ef2] px-8 py-1 text-2xl hover:bg-[#ff293eb6]"
          onClick={handleLogout}
        >
          logout
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
