import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import { ToastContainer } from "react-toastify";

const login = () => {
  return (
    <Container className="p-3 p-lg-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <ToastContainer
            autoClose={6000}
            position="bottom-left"
            toastClassName="cofi-toast"
            progressStyle={{
              background: "red",
            }}
          />

          <SimpleTitleOne
            title="Login with your account"
            desc="Description here"
          />
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default login;
