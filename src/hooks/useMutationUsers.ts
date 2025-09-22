import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authhService";
import { AuthStore } from "../stores";
import { useNavigate } from "react-router-dom";
import type { LoginFormData, RegisterFormData } from "../components";

export const useMutationRegister = () => {
  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormData) =>
      registerUser(data.email, data.password),
    onError: (error: Error) => {
      alert(error.message);
    },
  });
  return { registerMutation };
};
export const useMutationLogin = () => {
  const login = AuthStore((state) => state.login);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data.email, data.password),
    onSuccess: (data, variables) => {
      login(variables.email, data.uid);
      navigate("/private/dashboard");
    },
    onError: (error: Error) => {
      alert(error.message);
      console.log(error.message);
    },
  });
  return { loginMutation };
};
