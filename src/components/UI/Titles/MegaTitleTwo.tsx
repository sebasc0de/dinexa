import Link from "next/link";
import { Button } from "react-bootstrap";

export const MegaTitleTwo = ({
  desc,
  title,
  gradientText,
  buttonUrl,
  buttonText,
}: MegaTitleTwoProps) => {
  return (
    <div className="megaTitleTwo">
      <h2 className="megaTitleTwo--title">
        {title}
        <span className="megaTitleTwo--gradient">{gradientText}</span>
      </h2>

      <span className="megaTitleTwo--desc">{desc}</span>
      <Link href={buttonUrl}>
        <Button className="cofi-button">{buttonText}</Button>
      </Link>
    </div>
  );
};

export interface MegaTitleTwoProps {
  title: string;
  gradientText: string;
  desc: string;
  buttonText: string;
  buttonUrl: string;
}
