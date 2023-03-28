import React from "react";
import PhoneInput from "react-phone-input-auto-format";

function NewUser({ props }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 translate-y-12 rounded-lg py-10 px-2 shadow">
        <section>
          <h2 className="text-center text-2xl	font-medium">Create account</h2>
          <p className="mb-8 text-center">
            Never miss an overdue library book again
          </p>
        </section>
        <section className="flex flex-col items-center">
          <form className="flex w-1/2 flex-col">
            <input
              type="text"
              className="mb-2 rounded-full"
              placeholder="Name *"
              required
            />
            <input
              type="text"
              className="mb-2 rounded-full"
              placeholder="Email *"
              required
            />
            <PhoneInput
              className="mb-2 rounded-full"
              placeholder="Phone number *"
              required
            />
            <input
              type="password"
              className="mb-2 rounded-full"
              placeholder="Password *"
              required
            />
            <p className="mb-8 pr-2 text-right text-xs font-normal">
              Already a user?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => props.setRegister(false)}
              >
                Sign in
              </button>
            </p>
          </form>
        </section>
        <section className="flex flex-row items-end justify-center">
          <button className="rounded-full bg-[#ff293ef2] px-10 py-2 text-white hover:bg-[#ff293eb6]">
            register
          </button>
        </section>
      </div>
    </div>
  );
}

export default NewUser;
