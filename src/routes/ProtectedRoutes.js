import { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const { getToken } = state.userAPI;
  return getToken() ? children : navigate("/login");
}

export default ProtectedRoutes;
