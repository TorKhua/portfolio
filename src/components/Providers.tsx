"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
