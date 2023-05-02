// Component imports
import Layout from "../components/layouts/Private";
import Modal from "../components/spend/Modal";
import Table from "../components/spend/Table";
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
