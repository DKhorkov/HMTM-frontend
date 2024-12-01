import { useFetchUser } from "../api/use-fetch-user";

export const UserButton = () => {
  const { data, loading } = useFetchUser();

  if (loading) return "loading";

  return <div></div>;
};
