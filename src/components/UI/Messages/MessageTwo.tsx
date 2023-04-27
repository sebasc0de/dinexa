import { Col, Image, Row } from "react-bootstrap";

const MessageTwo = ({ title, desc, imageUrl }: Props) => {
  return (
    <Row className="align-items-center">
      <Col md={3}>
        <Image src={imageUrl} width={125} height={125} />
      </Col>
      <Col>
        <h5 className="subtitle">{title}</h5>
        <p className="desc text-sm">{desc}</p>
      </Col>
    </Row>
  );
};

interface Props {
  title: string;
  desc: string;
  imageUrl: string;
}

export default MessageTwo;
