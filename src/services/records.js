export const fetchRecords = async (JWT, userId) => {
  const response = await fetch("http://localhost:8080/Records/User/12345678", {
    method: "GET",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${JWT}`
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
