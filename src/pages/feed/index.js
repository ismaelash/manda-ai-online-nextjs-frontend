import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCardIndex from "../../components/PostCard";
import Button from "react-bootstrap/Button";
import graphqlClient from "../../graphql/client";
import { POSTS_SHOW_QUERY } from "../../graphql/query";
import { useEffect, useState } from "react";

export default function FeedIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await graphqlClient(POSTS_SHOW_QUERY, {
      datetimeLocale: new Date().getTime().toString(),
    });
    setPosts(result.postsShow.data.reverse());
    console.log(result);
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="text-end mt-3">
          <Button href="/form" variant="success">
            Criar novo post
          </Button>
        </Col>
      </Row>
      {posts?.map((post) => (
        <PostCardIndex key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
}
