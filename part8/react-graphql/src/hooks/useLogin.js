import { useContext } from "react";
import { LoginContext } from "../contexts/login-context";

export function useLogin () {
  return useContext(LoginContext)
}