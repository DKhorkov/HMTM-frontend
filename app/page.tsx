"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/features/auth/api/use-fetch-user";
import { useLayoutEffect } from "react";

export default function Home() {
  useFetchUser();

  return (
    <div className="container flex gap-6">
      <Link href="/login">
        <Button>Login Page</Button>
      </Link>
      <Link href="/register">
        <Button>Sign up Page</Button>
      </Link>
    </div>
  );
}
