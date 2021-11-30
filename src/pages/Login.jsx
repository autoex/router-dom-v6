import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import FormLayout from "./FormLayout";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const { user, singIn } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    singIn(form.login.value, () => navigate(from, { replace: true }));
  };

  return (
    <div>
      <p>{location?.state?.from}</p>
      {user ? (
        user + ", you are loged in"
      ) : (
        <FormLayout submitHandler={submitHandler} placeholder={"Recipient's username"} btnText='Login' name='login' />
      )}
    </div>
  );
};

export default Login;
