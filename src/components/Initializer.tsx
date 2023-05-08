import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

// Slices
import { loadEarnings } from "../redux/slices/earning-slice";
import { loadSpends } from "../redux/slices/spend-slice";
import { setWalletMoney } from "../redux/slices/wallet-slice";

// Infraestructure layer
import walletRepository from "../modules/wallet/infraestructure/SupabaseRepository";
import earningRepository from "../modules/earning/infraestructure/SupabaseRepository";
import spendRepository from "../modules/spend/infraestructure/SupabaseRepository";

// Application layer
import { getMoney } from "../modules/wallet/application/Service";
import { getAll as getEarnings } from "../modules/earning/application/Service";
import { getAll as getSpends } from "../modules/spend/application/Service";

export const Initializer = () => {
  // Dispatch
  const dispatch = useAppDispatch();

  // User
  const user = useAppSelector((state) => state.auth.user);

  // Fetch all
  const fetchInitialData = async (user_id: string) => {
    const spends = await getSpends(spendRepository);
    const earnings = await getEarnings(earningRepository);
    const walletMoney = await getMoney(walletRepository, user_id);

    dispatch(loadSpends(spends));
    dispatch(loadEarnings(earnings));
    dispatch(setWalletMoney(walletMoney));
  };

  useEffect(() => {
    if (user) {
      fetchInitialData(user.id);
    }
  }, [dispatch, user]);

  return null;
};
