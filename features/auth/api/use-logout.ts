import { useApolloClient } from "@apollo/client";

import { useUserStore } from "../model/store";
import { GET_ME } from "./graphql";

export const useLogout = () => {
  const client = useApolloClient();
  const setUser = useUserStore((state) => state.setUser);

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    // client.refetchQueries({ include: [GET_ME] });
  };

  return { logout };
};
