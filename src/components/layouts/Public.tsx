import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Header from "../UI/Headers/Header";

export const Public = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <Container>{children}</Container>
    </main>
  );
};
