import React from "react";

function Login() {
  return (
    <div className="flex flex-col">
      <section>
        <h1 className="mx-28 cursor-pointer pb-4 pt-10 text-4xl">
          read<span className="c mx-0 font-bold text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      <div className="flex flex-col items-center">
        <div className="w-1/2 translate-y-12 rounded-lg py-10 px-2 shadow">
          <section>
            <h2 className="text-center text-2xl	font-medium">Welcome back!</h2>
            <p className="mb-8 text-center">
              Login to track your library books
            </p>
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
              <button className="mb-8 pr-2 text-right text-xs font-normal text-blue-600 hover:underline">
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
    </div>
  );
}

export default Login;
