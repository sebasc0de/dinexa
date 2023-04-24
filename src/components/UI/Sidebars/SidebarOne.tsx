import Link from "next/link";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SidebarOne = ({ navData }: Props) => {
  const { t } = useTranslation(["sidebars"]);

  return (
    <div className="sidebarOne">
      <Nav defaultActiveKey="/dashboard" className="flex-column gap-5 p-4">
        {navData.map((item, i) => {
          const Icon = item.Icon;

          return (
            <Nav.Link className="nav-link">
              <Icon />
              <Link href={item.route}>{t(`dashboard.${item.text}`)}</Link>
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
};

interface Props {
  navData: NavLink[];
}

export interface NavLink {
  Icon: React.FC;
  route: string;
  text: string;
}

export default SidebarOne;
