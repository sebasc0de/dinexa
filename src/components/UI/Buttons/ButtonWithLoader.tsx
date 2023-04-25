import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import LoaderOne from "../Loaders/LoaderOne";

const ButtonWithLoader = ({ children, loading, type, className }: Props) => {
  return (
    <Button type={type} className={`dinexa-button loader-button ${className}`}>
      {loading ? <LoaderOne /> : children}
    </Button>
  );
};

interface Props {
  children: ReactNode;
  loading: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default ButtonWithLoader;
