"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { Logo } from "./logo";
import { useFetchUser } from "@/features/auth/api/use-fetch-user";
import { useLogout } from "@/features/auth/api/use-logout";

export const Navbar = () => {
  const { logout } = useLogout();
  const { data, loading } = useFetchUser();
  const user = data?.me;

  const pathname = usePathname();
  const isSignInPage = pathname === "/login";

  return (
    <div className="sticky w-full top-0 z-10">
      <div className="container">
        <div className="h-14 flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10" />
          </Link>

          {!loading && !user && (
            <Button asChild>
              <Link href={isSignInPage ? "/register" : "/login"}>
                {isSignInPage ? "Регистрация" : "Войти"}
              </Link>
            </Button>
          )}
          {user && <Button onClick={logout}>Выйти</Button>}
        </div>
      </div>
    </div>
  );
};
