import React from "react";
import { useState } from "react";

import cn from "classnames";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { ReactComponent as IconPen } from "./assets/icon-pen.svg";
import s from "./Login.module.scss";
import logoImg from "./assets/logo.png";

export default function Login() {
  const [startFormMode, setFormMode] = useState(true);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(() => {
    return startFormMode
      ? {
          email: "",
          password: "",
        }
      : {
          email: "",
          password: "",
          repeatedPassword: "",
        };
  });

  const handleChangeFormMode = () => {
    setFormMode((prevState) => !prevState);
    setErrors({});
  };
  const handleChange = (event) => {
    if (Object.keys(errors).length) {
      setErrors({});
    }
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = (event) => {
    let errors = {};
    event.preventDefault();
    if (!startFormMode) {
      if (form.password !== form.repeatedPassword) {
        errors.repeatedPassword = "Repeat password must be equal password!!!";
        setErrors(errors);
        setForm((prevState) => ({ ...prevState, repeatedPassword: "" }));
        console.error(errors);
        return;
      }
      console.log(form);
      setForm({
        email: "",
        password: "",
        repeatedPassword: "",
      });
      return;
    }
    console.log(form);
    setForm({
      email: "",
      password: "",
      repeatedPassword: "",
    });
  };
  return (
    <div className={s.root}>
      <div className={s.headerLogo}>
        <img src={logoImg} alt="Logo" />
      </div>
      <div className={cn(s.container, { [s.active]: !startFormMode })}>
        <div className={s.card}></div>
        <div className={s.card}>
          <h1 className={s.title}>Login</h1>
          <form onSubmit={handleFormSubmit}>
            <Input
              type="email"
              labelName="Email"
              idFor="#email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              labelName="Password"
              idFor="#password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <div className={s.buttonContainer}>
              <Button color="red">
                <span>Go</span>
              </Button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)}>
          <div
            className={cn(s.toggle, { [s.active]: !startFormMode })}
            onClick={handleChangeFormMode}
          >
            <IconPen />
          </div>
          <h1 className={s.title}>
            Register
            <div className={s.close} onClick={handleChangeFormMode}></div>
          </h1>
          <form onSubmit={handleFormSubmit}>
            <Input
              type="email"
              labelName="Email"
              idFor="#signup-email"
              color="white"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              labelName="Password"
              idFor="#signup-password"
              color="white"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              labelName="Repeat Password"
              idFor="#signup-repeat-password"
              color="white"
              name="repeatedPassword"
              value={form.repeatedPassword}
              onChange={handleChange}
              error={errors.repeatedPassword}
              required
            />
            <div className={s.buttonContainer}>
              <Button color="red">
                <span>Register</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
