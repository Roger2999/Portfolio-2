import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authhService";
import type { FormData } from "../components";
import { AuthStore } from "../stores";
import { useNavigate } from "react-router-dom";

export const useMutationRegister = () => {
  const registerMutation = useMutation({
    mutationFn: (data: FormData) => registerUser(data.email, data.password),
    onSuccess: (user) => {
      alert(`Registrado ✅: ${user.email}`);
    },
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
    mutationFn: (data: FormData) => loginUser(data.email, data.password),
    onSuccess: (data, variables) => {
      alert(`Logeado ✅: ${data.email}`);
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
