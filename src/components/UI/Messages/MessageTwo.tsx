import { Col, Image, Row } from "react-bootstrap";

const MessageTwo = ({ title, desc, imageUrl, Component }: Props) => {
  return (
    <Row className="align-items-center">
      <Col md={3}>
        <Image src={imageUrl} width={125} height={125} />
      </Col>
      <Col>
        <h5 className="subtitle">{title}</h5>
        <p className="desc ">{desc}</p>
        {Component && <Component />}
      </Col>
    </Row>
  );
};

interface Props {
  title: string;
  desc: string;
  imageUrl: string;
  Component?: React.FC;
}

export default MessageTwo;
