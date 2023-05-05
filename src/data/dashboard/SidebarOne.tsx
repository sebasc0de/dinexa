import { IoIosLogOut } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { RiWalletLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { NavLink } from "../../components/UI/Sidebars/SidebarOne";

export const data: NavLink[] = [
  {
    Icon: AiOutlineThunderbolt,
    route: "/get-started",
    text: "start",
  },
  {
    Icon: MdAttachMoney,
    route: "/earnings",
    text: "earnings",
  },
  {
    Icon: TbMoneybag,
    route: "/spends",
    text: "spends",
  },
  // {
  //   Icon: RiWalletLine,
  //   route: "/wallet",
  //   text: "wallet",
  // },
  // {
  //   Icon: IoSettingsOutline,
  //   route: "/settings",
  //   text: "settings",
  // },
  {
    Icon: IoIosLogOut,
    route: "/logout",
    text: "logout",
  },
];
