import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

function Navbar() {
  const { removeToken } = useContext(UserContext);

  // This function removes the token from memory when logout
  const handleLogout = () => {
    removeToken();
  };

  return (
    <nav className="sticky top-0 z-40 m-0 flex flex-row items-baseline justify-between border-b-2 bg-white pb-4 pt-10">
      <section>
        <h1 className="cursor-pointer text-4xl">
          read<span className="c mx-0 font-bold text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      <section className="flex flex-row items-center">
        <button
          className="mr-0 rounded-full bg-[#ff293ef2] px-8 py-2 text-2xl hover:bg-[#e32b3d]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
