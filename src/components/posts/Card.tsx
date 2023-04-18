import Card from "react-bootstrap/Card";

function PostCard() {
  return (
    <Card className="postCardOne">
      <Card.Img variant="top" src="/images/books.jpg" />
      <Card.Body className="postCardOne__body">
        <Card.Title className="subtitle">Card Title</Card.Title>
        <Card.Text className="desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
