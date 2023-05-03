// Component imports
import Layout from "../components/layouts/Private";
import Modal from "../components/spend/Modal";
import Table from "../components/spend/Table";
import SimpleTitleTwo from "../components/UI/Titles/SimpleTitleTwo";

// Notification
import { ToastContainer } from "react-toastify";

const Spends = () => {
  return (
    <Layout>
      <ToastContainer
        autoClose={10000}
        bodyClassName="cofi-toast"
        position="top-center"
        progressStyle={{
          background: "red",
        }}
      />
      <SimpleTitleTwo title="Money spends" Component={Modal} />
      <Table />
    </Layout>
  );
};

export default Spends;
