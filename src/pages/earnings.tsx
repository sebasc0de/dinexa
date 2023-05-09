// Component imports
import Layout from "../components/layouts/Private";
import Modal from "../components/earning/Modal";
import SimpleTitleTwo from "../components/UI/Titles/SimpleTitleTwo";
import Table from "../components/earning/Table";

// Toast
import { ToastContainer } from "react-toastify";

const Earnings = () => {
  return (
    <Layout>
      <ToastContainer toastClassName="cofi-toast" position="top-center" />
      <SimpleTitleTwo title="Money earnings" Component={Modal} />
      <Table />
    </Layout>
  );
};

export default Earnings;
