import { useState } from "react";
import Layout from "../components/layouts/Dashboard";
import InitialConfigModal from "../components/wallet/InitialConfigModal";

const Wallet = () => {
  const [configured, setConfigured] = useState(false);

  return <Layout>{!configured && <InitialConfigModal />}</Layout>;
};

export default Wallet;
