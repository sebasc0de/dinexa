// Component imports
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layouts/Dashboard";
import Modal from "../components/moneyMovement/Modal";
import Table from "../components/moneyMovement/Table";
import SimpleTitleTwo from "../components/UI/Titles/SimpleTitleTwo";

const Spends = () => {
  return (
    <Layout>
      <SimpleTitleTwo title="Money spends" Component={Modal} />
      <Table />
    </Layout>
  );
};

export default Spends;
