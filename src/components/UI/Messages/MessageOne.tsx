import { Button, Container, Image, Row } from "react-bootstrap";

const MessageOne = ({
  title,
  subtitle,
  imgUrl,
  imgSize = 500,
  buttonText,
  buttonAction,
}: Props) => {
  return (
    <Container>
      <Row className="messageOne justify-content-center">
        <Image src={imgUrl} height={imgSize} width={imgSize} alt="" />
        <h3 className="text-center title--2">{title}</h3>
        <p className="desc text-center text-lg">{subtitle}</p>
        {buttonAction && (
          <Button onClick={buttonAction} className="dinexa-button mt-3">
            {buttonText}
          </Button>
        )}
      </Row>
    </Container>
  );
};

interface Props {
  title: string;
  subtitle: string;
  imgUrl: string;
  imgSize?: number;
  buttonText?: string;
  buttonAction?: () => void;
}

export default MessageOne;
