import React from "react";

type LoginFormData = {
  user: string;
  password: string;
};

const LoginForm = () => {
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
          user: formData.get("user") as string,
          password: formData.get("password") as string,
        };
        onSubmit(data);
      }}
    >
      <input name="user" />
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
