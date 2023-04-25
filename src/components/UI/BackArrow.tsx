import { Button } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const BackArrow = () => {
  return (
    <Button className="position-absolute icon-button">
      <Link href="/">
        <IoArrowBackOutline />
      </Link>
    </Button>
  );
};

export default BackArrow;
