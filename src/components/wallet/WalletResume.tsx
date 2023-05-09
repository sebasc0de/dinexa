import EarningCardTwo from "../UI/Cards/EarningCardTwo";
import { Button } from "react-bootstrap";
import Link from "next/link";

// Domain layer
import { returnTotalSpends } from "../../modules/spend/domain/returnTotalSpends";
import { returnTotalEarnings } from "../../modules/earning/domain/returnTotalEarnings";

// Icons
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";

const WalletResume = () => {
  const spends = useAppSelector((state) => state.spends.data);
  const earnings = useAppSelector((state) => state.earnings.data);

  const spendResume = returnTotalSpends(spends);
  const earningResume = returnTotalEarnings(earnings);

  return (
    <>
      <h5 className="subtitle text-center mb-4">Wallet resume</h5>
      <div className="d-flex justify-content-center gap-5 mb-3">
        <EarningCardTwo
          title="Earnings"
          earning={earningResume}
          Icon={<AiOutlineArrowDown size={25} />}
        />
        <EarningCardTwo
          title="Spends"
          earning={spendResume}
          Icon={<AiOutlineArrowUp size={25} />}
        />
      </div>
      <small className="desc d-block text-center mb-2">
        These are your daily cats, both gains and losses are summarized here.
      </small>
      <Link href="/get-started">
        <Button className="w-100 dinexa-button">Get started</Button>
      </Link>
    </>
  );
};

export default WalletResume;
