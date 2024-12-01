import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { RegisterUserInput } from "@/graphql/graphql";
import { useToast } from "@/hooks/use-toast";
import { SIGN_UP } from "./graphql";

export const useRegister = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [mutate, response] = useMutation(SIGN_UP);

  const register = (credentials: RegisterUserInput) =>
    mutate({ variables: { input: credentials } })
      .then(() => {
        toast({ title: "Аккаунт успешно создан" });
        router.push("/login");
      })
      .catch((error: Error) => {
        toast({ title: "Произошла ошибка", description: error?.message });
      });

  return { register, ...response };
};
