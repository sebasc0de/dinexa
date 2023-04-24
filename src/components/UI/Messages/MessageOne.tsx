import { Button, Container, Image, Row } from "react-bootstrap";

const MessageOne = ({
  title,
  subtitle,
  imgUrl,
  buttonText,
  buttonAction,
}: Props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Image src={imgUrl} style={{ maxWidth: "500px" }} alt="" />
        <h3 className="text-center title--2">{title}</h3>
        <p className="desc text-center text-lg">{subtitle}</p>
        <Button onClick={buttonAction} className="cofi-button mt-3">
          {buttonText}
        </Button>
      </Row>
    </Container>
  );
};

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction: () => void;
}

export default MessageOne;
