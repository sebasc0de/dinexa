import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SidebarOne = ({ navData }: Props) => {
  const route = useRouter().route;
  const { t } = useTranslation(["sidebars"]);

  return (
    <div className="sidebarOne d-none d-md-block">
      <Nav defaultActiveKey="/dashboard" className="flex-column gap-5 p-4">
        {navData.map((item, i) => {
          const NAV_ACTIVE = item.route === route && "active";
          const Icon = item.Icon;

          return (
            <Nav.Link className={`nav-link ${NAV_ACTIVE}`}>
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
