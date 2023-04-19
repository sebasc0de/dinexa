import Card from "react-bootstrap/Card";

function PostCard({ title, desc }: Props) {
  const TITLE_STLYES = desc ? "" : "text-center";

  return (
    <Card className="postCardOne">
      <Card.Img variant="top" src="/images/books.jpg" />
      <Card.Body className="postCardOne__body">
        <Card.Title className={`subtitle ${TITLE_STLYES}`}>{title}</Card.Title>
        <Card.Text className="desc">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

interface Props {
  title: string;
  desc?: string;
}

export default PostCard;
