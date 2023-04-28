import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";

const MessageTwo = ({
  title,
  desc,
  imageUrl,
  navLink,
  navText,
  imageSize = 125,
}: Props) => {
  return (
    <Row className="messageTwo align-items-center">
      <Col md={3}>
        <Image src={imageUrl} width={imageSize} height={imageSize} />
      </Col>
      <Col>
        <h5 className="subtitle">{title}</h5>
        <p className="desc ">{desc}</p>

        {navLink && <Link href={navLink}>{navText}</Link>}
      </Col>
    </Row>
  );
};

interface Props {
  title: string;
  desc: string;
  imageUrl: string;
  navText?: string;
  navLink?: string;
  imageSize?: number;
}

export default MessageTwo;
