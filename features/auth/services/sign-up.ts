import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { gql } from "@/graphql";
import { useToast } from "@/hooks/use-toast";
import { registerSchema } from "../schemas";

const SIGN_UP = gql(`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input)
  }
`);

export const useRegister = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [register, response] = useMutation(SIGN_UP);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(credentials: z.infer<typeof registerSchema>) {
    register({ variables: { input: credentials } })
      .then(() => {
        toast({ title: "Добро пожаловать" });
        router.push("/");
      })
      .catch((error: Error) => {
        toast({ title: "Произошла ошибка", description: error?.message });
      });
  }

  return {
    form,
    onSubmit,
    ...response,
  };
};
