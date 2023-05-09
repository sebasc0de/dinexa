import MoneyWallet from "../../components/wallet/WalletMoney";
import { useAppSelector } from "../../redux/hooks";

const Wallet = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return null;
  return (
    <div>
      <MoneyWallet />
    </div>
  );
};

export default Wallet;
