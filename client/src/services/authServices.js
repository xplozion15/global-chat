import { API_BASE_URL } from "../config/api";

const registerUser = async (userFormData) => {
  const { nickname, username, email, password } = userFormData;

  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create the user");
  }
  const result = await response.json();
  return result;
};

export { registerUser };
