import React, { useEffect, useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppSession } from "../auth/app-session";

import {
  BrandMark,
  GhostAction,
  HeaderActions,
  HeaderDesktopActions,
  HeaderShell,
  MobileMenuToggle,
  MobileNavActions,
  MobileNavGroup,
  MobileNavGroupTitle,
  MobileNavLink,
  MobileNavList,
  MobileNavPanel,
  MobileNavSublink,
  MobileNavSublinkCopy,
  MobileNavSublinkTitle,
  MobileNavSubgrid,
  MobileNavSurface,
  NavDropdown,
  NavDropdownCard,
  NavDropdownCopy,
  NavDropdownGrid,
  NavDropdownLink,
  NavDropdownTitle,
  NavItem,
  NavLinkButton,
  NavLinks,
  PrimaryAction,
  SearchField,
} from "../../style/homepagestyle/homestyle";

const isActivePath = (pathname, path) => {
  if (!path) {
    return false;
  }

  if (path === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(path);
};

const isDropdownActive = (pathname, children = []) =>
  children.some((child) => isActivePath(pathname, child.path));

const SiteHeader = ({
  navLinks,
  searchPlaceholder = "Search Cars eg. Audi Q7",
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSignInAction = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
      return;
    }

    const redirectTarget = pathname === "/sign-in" ? "/dashboard" : pathname;
    navigate(`/sign-in?redirect=${encodeURIComponent(redirectTarget)}`);
  };

  const handleAddListingAction = () => {
    if (isAuthenticated) {
      navigate("/dashboard/add-listing");
      return;
    }

    navigate(`/sign-in?redirect=${encodeURIComponent("/dashboard/add-listing")}`);
  };

  return (
    <HeaderShell>
      <BrandMark as={Link} to="/">
        BOXCARS
      </BrandMark>

      <SearchField>
        <SearchOutlinedIcon fontSize="small" />
        <input type="text" placeholder={searchPlaceholder} />
      </SearchField>

      <NavLinks>
        {navLinks.map((linkItem) => {
          const isActive = linkItem.children
            ? isDropdownActive(pathname, linkItem.children)
            : isActivePath(pathname, linkItem.path);

          if (linkItem.children?.length) {
            return (
              <NavItem key={linkItem.label}>
                <NavLinkButton type="button" $active={isActive}>
                  {linkItem.label}
                  <ExpandMoreRoundedIcon fontSize="inherit" />
                </NavLinkButton>

                <NavDropdown>
                  <NavDropdownCard>
                    <NavDropdownGrid>
                      {linkItem.children.map((childItem) => (
                        <NavDropdownLink key={childItem.path} to={childItem.path}>
                          <NavDropdownTitle>{childItem.label}</NavDropdownTitle>
                          <NavDropdownCopy>{childItem.description}</NavDropdownCopy>
                        </NavDropdownLink>
                      ))}
                    </NavDropdownGrid>
                  </NavDropdownCard>
                </NavDropdown>
              </NavItem>
            );
          }

          if (linkItem.path) {
            return (
              <NavItem key={linkItem.label}>
                <NavLinkButton
                  as={Link}
                  to={linkItem.path}
                  type="button"
                  $active={isActive}
                >
                  {linkItem.label}
                </NavLinkButton>
              </NavItem>
            );
          }

          return (
            <NavItem key={linkItem.label}>
              <NavLinkButton type="button">{linkItem.label}</NavLinkButton>
            </NavItem>
          );
        })}
      </NavLinks>

      <HeaderActions>
        <HeaderDesktopActions>
          <GhostAction type="button" onClick={handleSignInAction}>
            <PersonOutlineIcon fontSize="small" />
            {isAuthenticated ? "Dashboard" : "Sign In"}
          </GhostAction>
          <PrimaryAction type="button" onClick={handleAddListingAction}>
            Add Listing
          </PrimaryAction>
        </HeaderDesktopActions>

        <MobileMenuToggle
          type="button"
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          {mobileMenuOpen ? (
            <CloseRoundedIcon fontSize="small" />
          ) : (
            <MenuRoundedIcon fontSize="small" />
          )}
          Menu
        </MobileMenuToggle>
      </HeaderActions>

      <MobileNavPanel $open={mobileMenuOpen}>
        <MobileNavSurface>
          <MobileNavList>
            {navLinks.map((linkItem) => {
              const isActive = linkItem.children
                ? isDropdownActive(pathname, linkItem.children)
                : isActivePath(pathname, linkItem.path);

              if (linkItem.children?.length) {
                return (
                  <MobileNavGroup key={linkItem.label}>
                    <MobileNavGroupTitle>
                      {linkItem.label}
                      <ExpandMoreRoundedIcon fontSize="small" />
                    </MobileNavGroupTitle>

                    <MobileNavSubgrid>
                      {linkItem.children.map((childItem) => (
                        <MobileNavSublink key={childItem.path} to={childItem.path}>
                          <MobileNavSublinkTitle>{childItem.label}</MobileNavSublinkTitle>
                          <MobileNavSublinkCopy>
                            {childItem.description}
                          </MobileNavSublinkCopy>
                        </MobileNavSublink>
                      ))}
                    </MobileNavSubgrid>
                  </MobileNavGroup>
                );
              }

              if (linkItem.path) {
                return (
                  <MobileNavLink key={linkItem.label} to={linkItem.path} $active={isActive}>
                    <span>{linkItem.label}</span>
                    <ChevronRightRoundedIcon fontSize="small" />
                  </MobileNavLink>
                );
              }

              return null;
            })}
          </MobileNavList>

          <MobileNavActions>
            <GhostAction type="button" onClick={handleSignInAction}>
              <PersonOutlineIcon fontSize="small" />
              {isAuthenticated ? "Dashboard" : "Sign In"}
            </GhostAction>
            <PrimaryAction type="button" onClick={handleAddListingAction}>
              Add Listing
            </PrimaryAction>
          </MobileNavActions>
        </MobileNavSurface>
      </MobileNavPanel>
    </HeaderShell>
  );
};

export default SiteHeader;
