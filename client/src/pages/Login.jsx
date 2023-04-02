import React, { useState } from "react";
import NewUser from "../components/NewUser";
import OldUser from "../components/OldUser";
import axios from "axios";

function Login({ setToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  // Function to handle the login of an old or new user
  const login = async (event) => {
    try {
      if (name && email && phone && password) {
        const token = await axios.post("http://localhost:8001/api/login/new", {
          name: name,
          email: email,
          phone: phone,
          password: password,
        });
        setToken(token.data.token);
      } else {
        const token = await axios.post("http://localhost:8001/api/login", {
          email: email,
          password: password,
        });
        setToken(token.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let props = {
    setRegister,
    register,
    setEmail,
    setPassword,
    email,
    password,
    login,
    setName,
    setPhone,
    phone,
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
