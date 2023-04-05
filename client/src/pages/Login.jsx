import React, { useContext, useState } from "react";
import NewUser from "../components/NewUser";
import OldUser from "../components/OldUser";
import axios from "axios";
import { UserContext } from "../contexts/userContext";

function Login() {
  // useState for the login/registration fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const { updateToken } = useContext(UserContext);

  // Function to handle the login of an old or new user
  const login = async (event) => {
    try {
      // REGISTER
      if (name && email && phone && password) {
        const token = await axios.post("http://localhost:8001/api/login/new", {
          name: name,
          email: email,
          phone: phone,
          password: password,
        });
        updateToken(token.data.token);
      } else {
        // LOGIN
        const token = await axios.post("http://localhost:8001/api/login", {
          email: email,
          password: password,
        });
        updateToken(token.data.token);
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
