import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { gql } from "@/graphql";
import { useToast } from "@/hooks/use-toast";
import { loginSchema } from "../schemas";

const SIGN_IN = gql(`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      accessToken
    }
  }
`);

export const useLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [login, response] = useMutation(SIGN_IN);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(credentials: z.infer<typeof loginSchema>) {
    login({ variables: { input: credentials } })
      .then(() => {
        toast({ title: "Добро пожаловать" });
        router.push("/");
      })
      .catch((error: Error) => {
        toast({ title: "Произошла ошибка", description: error?.message });
      });
  }

  return { form, onSubmit, ...response };
};
