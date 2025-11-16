import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "../stores";
import { loginUser, registerUser } from "../services/authService";
import type { FormLoginData, FormRegisterData } from "../models/form.model";

export const useLoginMutation = () => {
  const login = AuthStore((state) => state.login);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (data: FormLoginData) => loginUser(data.email, data.password),
    onSuccess: (data, variables) => {
      login(variables.email, data.token);
      navigate("/private/dashboard");
    },
    onError: (err) => {
      console.log(`Error en el login: ${err?.message || "Intenta nuevamente"}`);
    },
  });
  return loginMutation;
};
export const useRegisterMutation = () => {
  const registerMutation = useMutation({
    mutationFn: (data: FormRegisterData) =>
      registerUser(data.email, data.password),
    onSuccess: (data) => {
      console.log(`Usuario registrado: ${data.id}`);
    },
    onError: (error) => console.log(error.message),
  });
  return registerMutation;
};
