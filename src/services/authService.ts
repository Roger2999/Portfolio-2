
export const loginService = async (data: { email: string; password: string }) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  if (!response.ok) {
    throw new Error(`Error in response: ${response.status} ${response.statusText}`);
  }
  const result = await response.json();
  console.log("Respuesta registro:", result);

  return result;
};
