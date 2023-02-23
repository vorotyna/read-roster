import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row mt-14 items-baseline">
      <section>
        <h1 className="text-3xl">
          read<span className="mx-0 font-bold">roster</span>
        </h1>
      </section>
      <section>
        <h2 className="text-2xl">
          login
        </h2>
      </section>
    </nav>
  );
}

export default Navbar;
