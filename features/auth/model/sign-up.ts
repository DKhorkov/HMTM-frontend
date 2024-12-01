import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";

export const useRegisterForm = () => {
  const { register, ...response } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(credentials: z.infer<typeof registerSchema>) {
    register(credentials);
  }

  return {
    form,
    onSubmit,
    ...response,
  };
};
