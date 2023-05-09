import Link from "next/link";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";

const AuthButtons = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) return null;
  return (
    <div>
      <Link
        href="/login"
        className="d-none d-lg-inline-block secondary-button mx-4"
      >
        Login
      </Link>
      <Link href="/create-account">
        <Button className="dinexa-button">Start now</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
