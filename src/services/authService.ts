import { pb } from "../lib/pb";

export const registerUser = async (email: string, password: string) => {
  const data = { email, password, passwordConfirm: password };
  const user = await pb.collection("users").create(data);
  //enviar email de verificacion
  await pb.collection("users").requestVerification(email);
  return {
    user,
    success: true,
    message: "Usuario registrado correctamente, por favor verifica tu email",
  };
};
export const loginUser = async (email: string, password: string) => {
  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);
  return authData;
};
export const logoutUser = async () => {
  pb.authStore.clear();
};
