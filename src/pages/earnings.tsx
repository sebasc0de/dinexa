// Component imports
import Layout from "../components/layouts/Private";
import Modal from "../components/spend/Modal";
import SimpleTitleTwo from "../components/UI/Titles/SimpleTitleTwo";
import Table from "../components/earning/Table";

const Earnings = () => {
  return (
    <Layout>
      <SimpleTitleTwo title="Money earnings" Component={Modal} />
      <Table />
    </Layout>
  );
};

export default Earnings;
