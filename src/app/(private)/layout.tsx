import { ReactNode } from "react";

export default function PrivateLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <h1>Página privada {children}</h1>;
}
