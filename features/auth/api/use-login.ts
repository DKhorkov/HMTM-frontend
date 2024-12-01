import { useRouter } from "next/navigation";
import { useApolloClient, useMutation } from "@apollo/client";
import { LoginUserInput } from "@/graphql/graphql";
import { useToast } from "@/hooks/use-toast";
import { GET_ME, SIGN_IN } from "./graphql";

export const useLogin = () => {
  const client = useApolloClient();
  const router = useRouter();
  const { toast } = useToast();
  const [mutate, response] = useMutation(SIGN_IN);

  const login = (credentials: LoginUserInput) =>
    mutate({ variables: { input: credentials } })
      .then((res) => {
        localStorage.setItem("token", res.data!.loginUser.accessToken);

        client.refetchQueries({ include: "active" });
        toast({ title: "Добро пожаловать" });
        router.push("/");
      })
      .catch((error: Error) => {
        toast({ title: "Произошла ошибка", description: error?.message });
      });

  return { login, ...response };
};
