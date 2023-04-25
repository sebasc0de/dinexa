import { Col, Container, Row } from "react-bootstrap";
import { SupabaseRepository } from "../modules/auth/infraestructure/SupabaseRepository";
import { ToastContainer } from "react-toastify";
import LoginForm from "../components/auth/LoginForm";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import SliderTwo from "../components/UI/Sliders/SliderTwo";

const login = () => {
  const repository = SupabaseRepository();

  return (
    <Container fluid>
      <ToastContainer
        autoClose={6000}
        position="bottom-left"
        toastClassName="cofi-toast"
        progressStyle={{
          background: "red",
        }}
      />

      <Row style={{ minHeight: "100vh" }}>
        <Col
          className="bg-white d-flex flex-column justify-content-center p-5"
          lg={5}
        >
          <SimpleTitleOne
            title="Login"
            desc="Login into Dinexa with your account"
          />
          <LoginForm repository={repository} />
        </Col>
        <Col
          className="d-flex flex-column justify-content-end p-5 bg-primary"
          lg={7}
        >
          <SliderTwo />
        </Col>
      </Row>
    </Container>
  );
};

export default login;
