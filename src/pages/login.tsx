import { Col, Container, Row } from "react-bootstrap";
import { SupabaseRepository } from "../modules/auth/infraestructure/SupabaseRepository";
import { ToastContainer } from "react-toastify";
import LoginForm from "../components/auth/LoginForm";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import SliderTwo from "../components/UI/Sliders/SliderTwo";
import BackArrow from "../components/UI/BackArrow";

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
        <BackArrow iconSize={25} />

        <Col
          className="bg-white my-5 d-flex flex-column justify-content-center p-3 p-md-5"
          lg={5}
        >
          <SimpleTitleOne
            title="Login"
            desc="Login into Dinexa with your account"
          />
          <LoginForm repository={repository} />
        </Col>
        <Col
          className="d-flex flex-column justify-content-end py-3 p-md-5 bg-primary"
          lg={7}
        >
          <SliderTwo />
        </Col>
      </Row>
    </Container>
  );
};

export default login;
