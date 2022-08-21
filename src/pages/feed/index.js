import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCardIndex from "../../components/PostCard";
import Button from "react-bootstrap/Button";

export default function FeedIndex() {
  return (
    <Container>
      <Row>
        <Col md={12} className="text-end mt-3">
          <Button href="/form" variant="success">
            Criar novo post
          </Button>
        </Col>
      </Row>
      <PostCardIndex title="Micaela" body="gostosa" />
    </Container>
  );
}
