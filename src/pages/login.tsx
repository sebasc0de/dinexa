import { Col, Container, Row } from "react-bootstrap";
import { SupabaseRepository } from "../modules/auth/infraestructure/SupabaseRepository";
import { ToastContainer } from "react-toastify";
import LoginForm from "../components/auth/LoginForm";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";

const login = () => {
  const repository = SupabaseRepository();

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
          <LoginForm repository={repository} />
        </Col>
      </Row>
    </Container>
  );
};

export default login;
