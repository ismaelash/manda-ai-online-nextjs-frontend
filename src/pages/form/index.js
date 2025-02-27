import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import graphqlClient from "../../graphql/client";
import { CREATE_POST_MUTATION } from "../../graphql/mutation";

export default function FormIndex() {
  const [typePost, setTypePost] = useState("1");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  function onChangeTypePost(value) {
    setTypePost(value);
  }

  async function onCreatePost() {
    if (typePost === "1" && (title === "" || body === "")) {
      setResult("invalid fields");
      console.log("error 1");
      return;
    } else if (
      typePost === "2" &&
      (title === "" || body === "" || date === "" || time === "")
    ) {
      setResult("invalid fields");
      console.log("error 2", typePost, title, body);
      return;
    }

    const result = await graphqlClient(CREATE_POST_MUTATION, {
      post: {
        title: title,
        body: body,
        isSchedule: typePost === "1" ? false : true,
        datetimeSchedule:
          typePost === "1"
            ? ""
            : new Date(`${date}T${time}`).getTime().toString(),
      },
    });
    
    if (result.createPost.statusCode === 200) {
      setResult("success");
      setTypePost("1");
      setTitle("");
      setBody("");
      setDate("");
      setTime("");
    } else {
      setResult("error");
    }
  }

  function alertResult() {
    setTimeout(() => {
      setResult("");
    }, 5000);

    return (
      <>
        {result && (
          <Alert variant={result === "success" ? "success" : "danger"}>
            {result === "success" ? "Tudo ótimo" : "Fudeu algo"}
          </Alert>
        )}
      </>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="text-end mt-3">
          <Button href="/feed" variant="info">
            Voltar
          </Button>
        </Col>
      </Row>
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
                        type="text"
                        placeholder="Digite o titulo do seu post."
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Corpo da mensagem:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {typePost === "2" && (
            <Row className="justify-content-end">
              <Col md={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            onChange={(event) => setDate(event.target.value)}
                          >
                            <Form.Label>Data do agendamento:</Form.Label>
                            <Form.Control required type="date" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            onChange={(event) => setTime(event.target.value)}
                          >
                            <Form.Label>Hora do agendamento:</Form.Label>
                            <Form.Control required type="time" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
          <Row>
            <Col md={12} className="text-end mb-3">
              <Dropdown
                as={ButtonGroup}
                onSelect={(value) => onChangeTypePost(value)}
              >
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-custom-2"
                />
                <Button variant="success" onClick={onCreatePost}>
                  {typePost === "1" ? "Postar agora" : "Agendar postagem"}
                </Button>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Postar agora</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Agendar postagem</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col md={12}>{alertResult()}</Col>
          </Row>
        </Col>
      </Row>
      <Card className="text-center">
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <Card.Title>by</Card.Title>
          <Card.Text>Ismael Ash</Card.Text>
          <Button
            href="https://www.linkedin.com/in/ismaelash/"
            variant="primary"
          >
            Go linkedin
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
