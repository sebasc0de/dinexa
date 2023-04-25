import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import RegisterForm from "../components/auth/RegisterForm";
import SliderOne from "../components/UI/Sliders/SliderOne";

const CreateAccount = () => {
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
          className="bg-white d-flex flex-column justify-content-center p-3 p-md-5"
          lg={5}
        >
          <SimpleTitleOne
            title="Register"
            desc="Login into Dinexa with your account"
          />
          <RegisterForm />
        </Col>
        <Col
          className="d-flex flex-column justify-content-end py-3 p-md-5 bg-primary"
          lg={7}
        >
          <SliderOne />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccount;
