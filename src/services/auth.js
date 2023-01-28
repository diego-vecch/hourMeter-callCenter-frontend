export const tryLogin = async (username, password) => {
  const response = await fetch("http://localhost:8080/Login/authenticate", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
