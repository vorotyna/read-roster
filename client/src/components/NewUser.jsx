import React from "react";
import PhoneInput from "react-phone-input-auto-format";

// This NewUser component is used when a new user registers

function NewUser({ props }) {
  // Function to handle phone number state
  const onChange = (phoneNumber) => {
    props.setPhone(phoneNumber);
  };

  // Function to handle 'enter' key press in the form
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);

      if (index === form.length - 2) {
        event.preventDefault();
        props.login();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 translate-y-12 rounded-lg py-10 px-2 shadow">
        <section>
          <h2 className="text-center text-2xl	font-medium">Create account</h2>
          <p className="mb-8 text-center">
            Never have an overdue library book again
          </p>
        </section>
        <section className="flex flex-col items-center">
          <form className="flex w-1/2 flex-col" onKeyDown={handleKeyDown}>
            <input
              type="text"
              className="mb-2 rounded-full"
              placeholder="Name *"
              required
              onChange={(event) => {
                props.setName(event.target.value);
              }}
            />
            <input
              type="text"
              className="mb-2 rounded-full"
              placeholder="Email *"
              required
              onChange={(event) => {
                props.setEmail(event.target.value);
              }}
            />
            <PhoneInput
              className="mb-2 rounded-full"
              placeholder="Phone number *"
              required
              onChange={onChange}
            />
            <input
              type="password"
              className="mb-2 rounded-full"
              placeholder="Password *"
              required
              onChange={(event) => {
                props.setPassword(event.target.value);
              }}
            />
            <p className="mb-6 pr-2 text-right text-xs font-normal">
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
          <button
            className="w-1/2 rounded-full bg-[#ff293ef2] py-2 text-white hover:bg-[#e32b3d]"
            onClick={props.login}
          >
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

export default NewUser;
