import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Fragment } from "react";

export default function PostCardIndex({ title, body }) {
  return (
    <Fragment>
      <Row>
        <Col md={12} lg={12}>
          <Card className="mb-3 mt-3">
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Titulo:</Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        placeholder="Digite o titulo do seu post."
                        value={title}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Corpo da mensagem:</Form.Label>
                      <Form.Control
                        disabled
                        value={body}
                        as="textarea"
                        rows={4}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
