import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/signin/AuthSlice";

interface CredentialTypes {
  username: string;
  password: string;
}

const login = async ({ username, password }: CredentialTypes) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid Credentials");
  }

  return res.json();
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(loginUser(data));
      navigate("/home");
    },
  });

  return mutation;
};
