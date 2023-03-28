import React, { useState } from "react";
import NewUser from "../components/NewUser";
import OldUser from "../components/OldUser";

function Login() {
  const [register, setRegister] = useState(false);

  let props = {
    setRegister,
    register,
  };

  return (
    <div className="flex flex-col">
      <section>
        <h1 className="mx-28 cursor-pointer pb-4 pt-10 text-4xl">
          read<span className="c mx-0 font-bold text-[#ff293ef2]">roster</span>
        </h1>
      </section>
      {register ? <NewUser props={props} /> : <OldUser props={props} />}
    </div>
  );
}

export default Login;
