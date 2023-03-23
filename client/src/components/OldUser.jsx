import React from "react";

function OldUser({ props }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 translate-y-12 rounded-lg py-10 px-2 shadow">
        <section>
          <h2 className="text-center text-2xl	font-medium">Welcome back!</h2>
          <p className="mb-8 text-center">Login to track your library books</p>
        </section>
        <section className="flex flex-col items-center">
          <form className="flex w-1/2 flex-col">
            <input
              type="text"
              className="mb-4 rounded-full"
              placeholder="Enter email"
            />
            <input
              type="password"
              className="mb-2 rounded-full"
              placeholder="Enter password"
            />
            <button
              className="mb-8 pr-2 text-right text-xs font-normal text-blue-600 hover:underline"
              onClick={() => props.setRegister(true)}
            >
              Create an account
            </button>
          </form>
        </section>
        <section className="flex flex-row items-end justify-center">
          <button className="rounded-full bg-[#ff293ef2] px-10 py-2 text-white hover:bg-[#ff293eb6]">
            login
          </button>
        </section>
      </div>
    </div>
  );
}

export default OldUser;
