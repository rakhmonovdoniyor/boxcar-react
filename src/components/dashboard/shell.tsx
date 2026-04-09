import React, { useEffect, useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppSession } from "../auth/app-session";
import {
  dashboardNavItems,
  dashboardPublicLinks,
} from "../../data/dashboardData";
import {
  DashboardAvatar,
  DashboardBrand,
  DashboardFooter,
  DashboardFooterLink,
  DashboardFooterLinks,
  DashboardFrame,
  DashboardMain,
  DashboardMenuToggle,
  DashboardPublicLink,
  DashboardPublicNav,
  DashboardSearch,
  DashboardShell as DashboardShellRoot,
  DashboardSidebar,
  DashboardSidebarLink,
  DashboardSidebarLogout,
  DashboardSidebarMobile,
  DashboardSidebarNav,
  DashboardTopbar,
  DashboardTopbarLeft,
  DashboardTopbarRight,
} from "../../style/dashboard/dashboardStyle";

const sidebarIconMap = {
  dashboard: <DashboardOutlinedIcon fontSize="small" />,
  listings: <ViewListOutlinedIcon fontSize="small" />,
  add: <AddBoxOutlinedIcon fontSize="small" />,
  favorites: <FavoriteBorderRoundedIcon fontSize="small" />,
  search: <SearchRoundedIcon fontSize="small" />,
  messages: <MailOutlineRoundedIcon fontSize="small" />,
  profile: <PersonOutlineRoundedIcon fontSize="small" />,
};

const SidebarContent = ({ onLogout }: { onLogout: () => void }) => (
  <>
    <DashboardBrand to="/">BOXCARS</DashboardBrand>

    <DashboardSidebarNav>
      {dashboardNavItems.map((item) => (
        <DashboardSidebarLink key={item.id} end={item.path === "/dashboard"} to={item.path}>
          {sidebarIconMap[item.icon]}
          {item.label}
        </DashboardSidebarLink>
      ))}

      <DashboardSidebarLogout type="button" onClick={onLogout}>
        <LogoutRoundedIcon fontSize="small" />
        Logout
      </DashboardSidebarLogout>
    </DashboardSidebarNav>
  </>
);

const DashboardShell = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { signOut, user } = useAppSession();

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    signOut();
    navigate("/sign-in", { replace: true });
  };

  return (
    <DashboardShellRoot>
      <DashboardFrame>
        <DashboardSidebar>
          <SidebarContent onLogout={handleLogout} />
        </DashboardSidebar>

        <DashboardMain>
          <DashboardTopbar>
            <DashboardTopbarLeft>
              <DashboardMenuToggle
                type="button"
                onClick={() => setMobileSidebarOpen((currentValue) => !currentValue)}
              >
                <MenuRoundedIcon fontSize="small" />
              </DashboardMenuToggle>

              <DashboardSearch>
                <SearchRoundedIcon fontSize="small" />
                <input placeholder="Search Cars eg. Audi Q7" type="text" />
              </DashboardSearch>
            </DashboardTopbarLeft>

            <DashboardTopbarRight>
              <DashboardPublicNav>
                {dashboardPublicLinks.map((link) => (
                  <DashboardPublicLink key={link.path} to={link.path}>
                    {link.label}
                  </DashboardPublicLink>
                ))}
              </DashboardPublicNav>

              <DashboardAvatar>{user?.initials ?? "AT"}</DashboardAvatar>
            </DashboardTopbarRight>
          </DashboardTopbar>

          <DashboardSidebarMobile $open={mobileSidebarOpen}>
            <DashboardSidebar>
              <SidebarContent onLogout={handleLogout} />
            </DashboardSidebar>
          </DashboardSidebarMobile>

          <Outlet />

          <DashboardFooter>
            <span>© 2023 Boxcars.com. All rights reserved.</span>
            <DashboardFooterLinks>
              <DashboardFooterLink to="/membership-plans">Terms & Conditions</DashboardFooterLink>
              <DashboardFooterLink to="/faq">Privacy Notice</DashboardFooterLink>
            </DashboardFooterLinks>
          </DashboardFooter>
        </DashboardMain>
      </DashboardFrame>
    </DashboardShellRoot>
  );
};

export default DashboardShell;
