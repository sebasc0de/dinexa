import { useDispatch } from "react-redux";
import LogoutScreen from "../components/UI/Screens/Logout";

// Redux
import { logOutUser } from "../redux/slices/auth-slice";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

const logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.signOut().then(() => {
      dispatch(logOutUser());
    });
  }, []);

  return <LogoutScreen />;
};

export default logout;
