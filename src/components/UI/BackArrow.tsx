import { Button } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const BackArrow = ({ iconSize }: { iconSize: number }) => {
  return (
    <Button className="position-absolute icon-button">
      <Link href="/">
        <IoArrowBackOutline size={iconSize} />
      </Link>
    </Button>
  );
};

export default BackArrow;
