import Header from "../UI/Headers/Dashboard";
import { ReactNode } from "react";

const Private = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Private;

interface Props {
  children: ReactNode;
}
