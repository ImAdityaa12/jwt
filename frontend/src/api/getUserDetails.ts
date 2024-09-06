export const getUserDetails = async (token: string) => {
  const response = await fetch(`http://localhost:7000/details/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ token: token }),
    credentials: "include",
  });
  const json = await response.json();
  return { data: json, status: response.status };
};
