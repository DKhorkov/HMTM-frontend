"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useLoginForm } from "../model/sign-in";

export const SignInCard = () => {
  const { form, loading, onSubmit } = useLoginForm();

  return (
    <Card className="max-w-[440px] w-[95vw]">
      <CardHeader className="text-center">
        <CardTitle>С возвращением</CardTitle>
        <CardDescription>Пожалуйста, введите данные для входа</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите ваш email..."
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-2.5">
              <Button type="submit" className="w-full" loading={loading}>
                Войти
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <p>
          <span className="text-muted-foreground">Еще нет аккаунта?</span>{" "}
          <Link href="/register" className="link">
            Создать
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
