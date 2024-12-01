import { useLayoutEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ME } from "./graphql";
import { useUserStore } from "../model/store";
import { useLogout } from "./use-logout";

export const useFetchUser = ({
  immediate = true,
}: { immediate?: boolean } = {}) => {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);
  const { logout } = useLogout();

  const [makeQuery, response] = useLazyQuery(GET_ME);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    const { data, error } = await makeQuery({
      variables: { accessToken: token },
    });
    setLoading(false);

    if (error) {
      logout();
    }

    setUser(data?.me);
    return data?.me;
  };

  useLayoutEffect(() => {
    if (immediate) {
      fetchUser();
    }
  }, []);

  return { fetchUser, ...response };
};
