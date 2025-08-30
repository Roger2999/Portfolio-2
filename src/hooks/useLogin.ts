import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "../stores";
import { loginService } from "../services/authService";
export const useLogin = () => {
  const login = AuthStore((state) => state.login);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data, variables) => {
      login(variables.email, data.token);
      navigate("/private/dashboard");
    },
    onError: (err) => {
      console.log(`Error en el login: ${err?.message || "Intenta nuevamente"}`);
    },
  });
  return mutation;
};
