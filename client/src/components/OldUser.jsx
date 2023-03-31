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
          <form className="flex w-1/2 flex-col" onSubmit={props.login}>
            <input
              type="text"
              value={props.email}
              className="mb-2 rounded-full"
              placeholder="Enter email"
              required
              onChange={(event) => {
                props.setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              value={props.password}
              className="mb-2 rounded-full"
              placeholder="Enter password"
              required
              onChange={(event) => {
                props.setPassword(event.target.value);
              }}
            />
            <button
              className="mb-6 pr-2 text-right text-xs font-normal text-blue-600 hover:underline"
              onClick={() => props.setRegister(true)}
            >
              Create an account
            </button>
            <button
              className="rounded-full bg-[#ff293ef2] px-10 py-2 text-white hover:bg-[#ff293eb6]"
              onClick={props.login}
            >
              login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default OldUser;
