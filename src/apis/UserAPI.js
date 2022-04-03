import { useEffect, useState } from "react";

export default function UserAPI() {
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const loginUser = (user) => {
    const { username, password } = user;

    if (username === "user" && password === "user") {
      setToken({ ...user, isAdmin: false });
    } else if (username === "admin" && password === "admin") {
      setToken({ ...user, isAdmin: true });
    }
  };

  const logout = () => {
    return localStorage.removeItem("user");
  };

  const setToken = (user) => {
    return localStorage.setItem("user", JSON.stringify(user));
  };

  const getToken = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return {
    loginUser,
    getToken,
    setToken,
    logout,
  };
}
