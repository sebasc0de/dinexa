import React, { ReactNode, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import Unauthorized from "../UI/Screens/Unauthorized";

const Auth = ({ children }: Props) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Unauthorized />;
  return <>{children}</>;
};
interface Props {
  children: ReactNode;
}
export default Auth;
