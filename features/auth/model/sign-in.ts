import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";

export const useLoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { login, ...response } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(credentials: z.infer<typeof loginSchema>) {
    login(credentials);
  }

  return { form, onSubmit, ...response };
};
