import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const DashboardShell = styled.div`
  min-height: 100vh;
  background: #070c23;
  color: #ffffff;
`;

export const DashboardFrame = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 24px 18px;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 22px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardSidebar = styled.aside`
  display: grid;
  align-content: start;
  gap: 24px;
  padding: 8px 0 0;
  position: sticky;
  top: 20px;
  align-self: start;

  @media (max-width: 1080px) {
    position: static;
    padding: 0;
  }
`;

export const DashboardBrand = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const DashboardSidebarNav = styled.nav`
  display: grid;
  gap: 8px;
  padding: 10px 0;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.02);
`;

export const DashboardSidebarLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 46px;
  padding: 0 14px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.76);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transform: translateX(2px);
  }
`;

export const DashboardSidebarLogout = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 46px;
  padding: 0 14px;
  border-radius: 14px;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.76);
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const DashboardMain = styled.main`
  display: grid;
  gap: 18px;
  min-width: 0;
`;

export const DashboardTopbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding: 4px 0 2px;
`;

export const DashboardTopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1 1 280px;
`;

export const DashboardMenuToggle = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 1080px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DashboardSearch = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-height: 46px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #ffffff;
    font: inherit;
  }
`;

export const DashboardTopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const DashboardPublicNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const DashboardPublicLink = styled(Link)`
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    color: #ffffff;
  }
`;

export const DashboardAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fbff, #b5c3ff);
  color: #050b20;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
`;

export const DashboardSurface = styled.section`
  background: #ffffff;
  color: #050b20;
  border-radius: 24px;
  padding: 24px;
  box-shadow:
    0 30px 80px rgba(4, 10, 28, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);

  @media (max-width: 720px) {
    padding: 18px;
  }
`;

export const DashboardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
`;

export const DashboardFooterLinks = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const DashboardFooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const DashboardSidebarMobile = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 1080px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
  }
`;

export const DashboardPageIntro = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 22px;
`;

export const DashboardPageTitle = styled.h1`
  margin: 0;
  color: #050b20;
  font-size: clamp(2rem, 4vw, 2.4rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
`;

export const DashboardPageCopy = styled.p`
  margin: 0;
  color: #69758f;
  font-size: 14px;
  line-height: 1.7;
`;

export const DashboardStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardStatCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #e5ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  box-shadow: 0 10px 24px rgba(5, 11, 32, 0.04);
`;

export const DashboardStatBody = styled.div`
  display: grid;
  gap: 8px;
`;

export const DashboardStatLabel = styled.div`
  color: #6f7d98;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const DashboardStatValue = styled.div`
  color: #050b20;
  font-size: 32px;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
`;

export const DashboardStatIcon = styled.div<{ $tone: "blue" | "pink" | "violet" | "sky" }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $tone }) =>
    $tone === "pink"
      ? "#ef5da8"
      : $tone === "violet"
        ? "#7c6cff"
        : $tone === "sky"
          ? "#55a8ff"
          : "#405ff2"};
  background: ${({ $tone }) =>
    $tone === "pink"
      ? "rgba(239, 93, 168, 0.12)"
      : $tone === "violet"
        ? "rgba(124, 108, 255, 0.12)"
        : $tone === "sky"
          ? "rgba(85, 168, 255, 0.12)"
          : "rgba(64, 95, 242, 0.12)"};
`;

export const DashboardOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr);
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid #e5ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  box-shadow: 0 12px 28px rgba(5, 11, 32, 0.04);
`;

export const DashboardCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DashboardCardTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: 18px;
  line-height: 1.25;
`;

export const DashboardCardMeta = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  color: #73809d;
  font-size: 12px;
`;

export const DashboardMetaPill = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f4f7fd;
`;

export const DashboardChartFrame = styled.div`
  position: relative;
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(64, 95, 242, 0.04) 0%, rgba(64, 95, 242, 0) 100%),
    #ffffff;
  overflow: hidden;
  border: 1px solid #eef2fb;
`;

export const DashboardMonthRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 8px;
  color: #8a96b2;
  font-size: 11px;
  padding: 0 16px 4px;
  text-align: center;
`;

export const DashboardActivityList = styled.div`
  display: grid;
  gap: 12px;
`;

export const DashboardActivityItem = styled.article`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const DashboardActivityIcon = styled.div<{ $tone: "blue" | "pink" | "violet" }>`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $tone }) =>
    $tone === "pink" ? "#ef5da8" : $tone === "violet" ? "#7c6cff" : "#405ff2"};
  background: ${({ $tone }) =>
    $tone === "pink"
      ? "rgba(239, 93, 168, 0.12)"
      : $tone === "violet"
        ? "rgba(124, 108, 255, 0.12)"
        : "rgba(64, 95, 242, 0.12)"};
`;

export const DashboardActivityBody = styled.div`
  display: grid;
  gap: 6px;
`;

export const DashboardActivityTitle = styled.div`
  color: #0c1634;
  font-size: 14px;
  line-height: 1.6;
`;

export const DashboardActivityTime = styled.div`
  color: #7f8ba7;
  font-size: 12px;
`;

export const DashboardOutlinedLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 46px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid #d6dff6;
  color: #405ff2;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;

export const DashboardTableCard = styled.section`
  border: 1px solid #e5ebf8;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(5, 11, 32, 0.04);
`;

export const DashboardToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  padding: 18px 20px;
  border-bottom: 1px solid #edf1f8;
`;

export const DashboardToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DashboardMiniSearch = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid #dfe7f6;
  background: #fbfcff;
  color: #7d89a5;

  input {
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    color: #050b20;
    min-width: 180px;
  }
`;

export const DashboardSelect = styled.select`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #050b20;
  font: inherit;
`;

export const DashboardTableHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr 80px 120px 100px 92px;
  gap: 12px;
  padding: 14px 20px;
  background: #f2f6ff;
  color: #6378a3;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const DashboardTableBody = styled.div`
  display: grid;
`;

export const DashboardTableRow = styled.article<{ $highlight?: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr 80px 120px 100px 92px;
  gap: 12px;
  padding: 18px 20px;
  align-items: center;
  border-top: 1px solid #edf1f8;
  background: ${({ $highlight }) => ($highlight ? "#f6f9ff" : "#ffffff")};

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const DashboardTableSummary = styled.div`
  padding: 0 20px 18px;
  color: #7c88a2;
  font-size: 12px;
  text-align: center;
`;

export const DashboardListingCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const DashboardListingThumb = styled.img`
  width: 78px;
  height: 64px;
  border-radius: 16px;
  object-fit: cover;
  display: block;
`;

export const DashboardListingBody = styled.div`
  display: grid;
  gap: 6px;
`;

export const DashboardListingTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 16px;
`;

export const DashboardListingMeta = styled.p`
  margin: 0;
  color: #74809b;
  font-size: 12px;
  line-height: 1.6;
`;

export const DashboardListingPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #050b20;

  span {
    color: #97a2bb;
    font-size: 12px;
    text-decoration: line-through;
  }
`;

export const DashboardTableValue = styled.div`
  color: #0f1836;
  font-size: 14px;
  font-weight: 600;
`;

export const DashboardStatusPill = styled.span<{ $tone?: "green" | "amber" }>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  color: ${({ $tone }) => ($tone === "amber" ? "#b76f00" : "#0a8f49")};
  background: ${({ $tone }) =>
    $tone === "amber" ? "rgba(255, 183, 77, 0.16)" : "rgba(18, 183, 106, 0.12)"};
  font-size: 12px;
  font-weight: 700;
`;

export const DashboardTableActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const DashboardIconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #405ff2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #bfd0fb;
    background: #f4f7ff;
  }
`;

export const DashboardPager = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 18px 20px 22px;
  border-top: 1px solid #edf1f8;
`;

export const DashboardPagerButton = styled.button<{ $active?: boolean }>`
  min-width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "#0d1531" : "#dfe7f6")};
  background: ${({ $active }) => ($active ? "#0d1531" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#405ff2")};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

export const DashboardFormCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #e5ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  box-shadow: 0 12px 28px rgba(5, 11, 32, 0.04);
`;

export const DashboardStepRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const DashboardStepPill = styled.button<{ $active?: boolean }>`
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "#cad6f4" : "#dfe7f6")};
  background: ${({ $active }) => ($active ? "#f1f5ff" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#405ff2" : "#6d7b98")};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
`;

export const DashboardFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardField = styled.label`
  display: grid;
  gap: 8px;
  color: #0f1836;
  font-size: 13px;
  font-weight: 700;

  input,
  select,
  textarea {
    width: 100%;
    box-sizing: border-box;
    min-height: 44px;
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid #dfe7f6;
    background: #ffffff;
    color: #050b20;
    font: inherit;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #a9bbf6;
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.1);
  }
`;

export const DashboardWideField = styled(DashboardField)`
  grid-column: span 2;

  @media (max-width: 620px) {
    grid-column: span 1;
  }
`;

export const DashboardFormHint = styled.p`
  margin: 0;
  color: #8c97b0;
  font-size: 12px;
  line-height: 1.6;
`;

export const DashboardSectionTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: 18px;
  line-height: 1.25;
`;

export const DashboardSectionCopy = styled.p`
  margin: 0;
  color: #707d99;
  font-size: 13px;
  line-height: 1.7;
`;

export const DashboardFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardFeatureGroup = styled.div`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid #e5ebf8;
  background: #f9fbff;
`;

export const DashboardChecklist = styled.div`
  display: grid;
  gap: 10px;
`;

export const DashboardCheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: #4f5d7b;
  font-size: 14px;
  line-height: 1.6;
`;

export const DashboardUploadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const DashboardUploadTile = styled.div<{ $dashed?: boolean }>`
  min-height: 110px;
  border-radius: 18px;
  border: 1px ${({ $dashed }) => ($dashed ? "dashed" : "solid")} #cfd9ef;
  background: ${({ $dashed }) => ($dashed ? "#f8fbff" : "#eef3ff")};
  display: grid;
  place-items: center;
  color: #6b7a99;
  text-align: center;
  padding: 12px;
  font-size: 13px;
  line-height: 1.55;
`;

export const DashboardMapPlaceholder = styled.div`
  min-height: 260px;
  border-radius: 20px;
  background:
    radial-gradient(circle at 72% 38%, rgba(64, 95, 242, 0.22) 0 12%, transparent 13%),
    radial-gradient(circle at 34% 70%, rgba(64, 95, 242, 0.16) 0 10%, transparent 11%),
    linear-gradient(rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(135deg, #eef6ff 0%, #e4f0ff 48%, #eff5fb 48%, #f8fbff 100%);
  background-size: auto, auto, 40px 40px, 40px 40px, auto;
`;

export const DashboardActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DashboardPrimaryButton = styled.button`
  min-height: 42px;
  padding: 0 16px;
  border-radius: 14px;
  border: 0;
  background: #405ff2;
  color: #ffffff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 12px 24px rgba(64, 95, 242, 0.24);
`;

export const DashboardSecondaryButton = styled.button`
  min-height: 42px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #050b20;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardFavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardFavoritesShell = styled.div`
  border: 1px solid #e5ebf8;
  border-radius: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  padding: 18px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
`;

export const DashboardFavoriteCard = styled.article`
  display: grid;
  gap: 0;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid #e5ebf8;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(5, 11, 32, 0.03);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #cad6f4;
    box-shadow: 0 18px 36px rgba(5, 11, 32, 0.08);
  }
`;

export const DashboardFavoriteMedia = styled.div`
  position: relative;
`;

export const DashboardFavoriteBadgeWrap = styled.div`
  position: absolute;
  left: 14px;
  top: 14px;
`;

export const DashboardFavoriteImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

export const DashboardFavoriteBody = styled.div`
  display: grid;
  gap: 12px;
  padding: 18px;
`;

export const DashboardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  width: fit-content;
  border-radius: 999px;
  background: #405ff2;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const DashboardFavoriteTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 19px;
  line-height: 1.24;
`;

export const DashboardFavoriteMeta = styled.p`
  margin: 0;
  color: #74809b;
  font-size: 13px;
  line-height: 1.65;
`;

export const DashboardFavoriteSpecs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: #50607f;
  font-size: 13px;
`;

export const DashboardFavoritePriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
`;

export const DashboardFavoritePrice = styled.div`
  color: #050b20;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

export const DashboardFavoriteMonthly = styled.div`
  color: #6e7b97;
  font-size: 13px;
`;

export const DashboardFavoriteLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #405ff2;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;

export const DashboardSavedRow = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) 1.6fr 140px 120px 92px;
  gap: 12px;
  padding: 18px 20px;
  align-items: center;
  border-top: 1px solid #edf1f8;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardSavedTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #050b20;
`;

export const DashboardSavedMeta = styled.p`
  margin: 0;
  color: #76839f;
  font-size: 13px;
  line-height: 1.65;
`;

export const DashboardMessagesGrid = styled.div`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardMessagesShell = styled.div`
  border: 1px solid #e5ebf8;
  border-radius: 20px;
  padding: 18px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
`;

export const DashboardThreadList = styled.div`
  display: grid;
  gap: 10px;
`;

export const DashboardThreadCard = styled.button<{ $active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid ${({ $active }) => ($active ? "#cad6f4" : "#e5ebf8")};
  background: ${({ $active }) => ($active ? "#f6f9ff" : "#ffffff")};
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #cad6f4;
  }
`;

export const DashboardThreadBody = styled.div`
  display: grid;
  gap: 4px;
`;

export const DashboardThreadName = styled.div`
  color: #0f1836;
  font-size: 15px;
  font-weight: 700;
`;

export const DashboardThreadMeta = styled.div`
  color: #7986a2;
  font-size: 12px;
`;

export const DashboardThreadAside = styled.div`
  display: grid;
  gap: 6px;
  justify-items: end;
`;

export const DashboardUnread = styled.span`
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: #405ff2;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardStatusDot = styled.span<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#12b76a" : "#c5cedf")};
`;

export const DashboardConversation = styled.div`
  display: grid;
  gap: 14px;
`;

export const DashboardConversationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 12px;
  border-bottom: 1px solid #edf1f8;
`;

export const DashboardConversationActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DashboardGhostButton = styled.button`
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #0f1836;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const DashboardConversationBody = styled.div`
  display: grid;
  gap: 12px;
`;

export const DashboardChatBubble = styled.div<{ $author: "them" | "you" }>`
  max-width: min(78%, 520px);
  padding: 14px 16px;
  border-radius: 18px;
  background: ${({ $author }) => ($author === "you" ? "#405ff2" : "#f5f7fc")};
  color: ${({ $author }) => ($author === "you" ? "#ffffff" : "#172242")};
  justify-self: ${({ $author }) => ($author === "you" ? "end" : "start")};
`;

export const DashboardChatTime = styled.div`
  margin-top: 6px;
  font-size: 11px;
  opacity: 0.8;
`;

export const DashboardMessageComposer = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const DashboardMessageInput = styled.input`
  flex: 1;
  min-height: 46px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #050b20;
  font: inherit;
`;

export const DashboardProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardProfileShell = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #e5ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  box-shadow: 0 12px 28px rgba(5, 11, 32, 0.04);
`;

export const DashboardCompactUploadRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DashboardCompactUpload = styled.div<{ $dashed?: boolean }>`
  width: 144px;
  height: 112px;
  border-radius: 16px;
  border: 1px ${({ $dashed }) => ($dashed ? "dashed" : "solid")} #cfd9ef;
  background: ${({ $dashed }) => ($dashed ? "#f8fbff" : "#eef3ff")};
  display: grid;
  place-items: center;
  padding: 12px;
  color: #72809b;
  text-align: center;
  flex: 0 0 144px;
`;

export const DashboardUploadPanel = styled.div`
  display: grid;
  gap: 16px;
`;

export const DashboardUploadBox = styled.div`
  min-height: 220px;
  border-radius: 22px;
  border: 1px dashed #cfd9ef;
  background: #f9fbff;
  display: grid;
  place-items: center;
  padding: 16px;
  text-align: center;
  color: #72809b;
`;

export const DashboardUploadMeta = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;
