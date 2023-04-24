import { AiFillWindows } from "react-icons/ai";
import { RiWalletLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "../../components/UI/Sidebars/SidebarOne";

export const data: NavLink[] = [
  {
    Icon: AiFillWindows,
    route: "",
    text: "Dashboard",
  },
  {
    Icon: RiWalletLine,
    route: "",
    text: "Wallet",
  },
  {
    Icon: IoSettingsOutline,
    route: "",
    text: "Settings",
  },
  {
    Icon: IoIosLogOut,
    route: "",
    text: "Cerrar sesion",
  },
];
