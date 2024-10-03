import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { api, post, token } from "../config/config";
import { Navigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import CustomForm from "../components/ui/CustomForm";
import { loginSchema } from "../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const [accessToken, setAccessToken] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const login = await post(api.LOGIN, { ...data });
      setAccessToken(login.data.token);
      toast("Login Sucessfully");
      token.set(login.data.token);
      // localStorage.setItem("username", login.data.user.username);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {accessToken && <Navigate to="/cart" replace="true" />}
      <div className="login-form">
        <h1>Login</h1>
        <CustomForm submit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            label="Email"
            props={register("email")}
          />
          <ErrorMessage errors={errors} name="email" />
          <Input
            type="password"
            name="password"
            label="Password"
            props={register("password")}
          />
          <ErrorMessage errors={errors} name="password" />
          <Button name="Login" />
        </CustomForm>
      </div>
    </>
  );
};

export default Login;
