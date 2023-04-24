// Component imports
import Layout from "../components/layouts/Dashboard";
import Modal from "../components/moneyMovement/Modal";
import SimpleTitleTwo from "../components/UI/Titles/SimpleTitleTwo";
import Table from "../components/moneyMovement/Table";

const dashboard = () => {
  return (
    <Layout>
      <SimpleTitleTwo Component={Modal} title="Money movements" />
      <Table />
    </Layout>
  );
};

export default dashboard;
