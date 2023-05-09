import { Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";

// Next js
import { useRouter } from "next/router";
import Link from "next/link";

// Translation
import { useTranslation } from "react-i18next";

// Icons
import { FaBars } from "react-icons/fa";
import { Logo } from "../Logo";

function DashboardMobileNav({ navData }: Props) {
  const route = useRouter().route;
  const { t } = useTranslation(["sidebars"]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FaBars
        size={25}
        className="d-block d-md-none"
        color="35415c"
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Logo />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            defaultActiveKey="/dashboard"
            className="verticalNavigation flex-column gap-5 p-4"
          >
            {navData.map((item, i) => {
              const NAV_ACTIVE = item.route === route && "active";
              const Icon = item.Icon;

              return (
                <Link
                  key={item.text}
                  className={`nav-link ${NAV_ACTIVE}`}
                  href={item.route}
                >
                  <Icon />
                  {t(`dashboard.${item.text}`)}
                </Link>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

interface Props {
  navData: NavLink[];
}

export interface NavLink {
  Icon: React.FC;
  route: string;
  text: string;
}

export default DashboardMobileNav;
