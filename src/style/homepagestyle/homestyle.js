import styled from "styled-components";
import { Link } from "react-router-dom";
import heroVehicleBackground from "../../assets/cars/bmw-5-series.jpg";

export const BigCon = styled.div`
  min-height: 100vh;
  background: #f9fbfc;
`;

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 820px;
  padding: 28px clamp(20px, 4vw, 56px) 190px;
  background:
    linear-gradient(180deg, rgba(10, 14, 28, 0.42) 0%, rgba(10, 14, 28, 0.56) 100%),
    linear-gradient(90deg, rgba(10, 14, 28, 0.48) 0%, rgba(10, 14, 28, 0.16) 58%, rgba(10, 14, 28, 0.52) 100%),
    url(${heroVehicleBackground}) center 38% / cover no-repeat;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 170px;
    width: min(42vw, 460px);
    height: min(42vw, 460px);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(2px);
    transform: translateX(-65%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 48px;
    width: min(32vw, 380px);
    height: min(28vw, 340px);
    background: rgba(255, 255, 255, 0.06);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    transform: translateX(-12%);
  }
`;

export const HeaderShell = styled.header`
  position: relative;
  z-index: 20;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto minmax(180px, 260px) minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  color: #ffffff;

  @media (max-width: 1180px) {
    grid-template-columns: auto 1fr auto;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const BrandMark = styled.div`
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: inherit;
  text-decoration: none;
`;

export const SearchField = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  color: rgba(255, 255, 255, 0.78);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:focus-within {
    border-color: rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.16);
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #ffffff;
    font: inherit;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: nowrap;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const NavLinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  padding: 8px 10px;
  border-radius: 999px;
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.14)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.84)"};
  font: inherit;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
`;

export const NavDropdown = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  z-index: 30;
  width: min(720px, 72vw);
  transform: translate(-50%, 10px);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
`;

export const NavDropdownCard = styled.div`
  padding: 18px;
  border-radius: 26px;
  border: 1px solid rgba(217, 224, 242, 0.18);
  background: rgba(9, 14, 34, 0.92);
  box-shadow: 0 28px 60px rgba(5, 11, 32, 0.28);
  backdrop-filter: blur(18px);
`;

export const NavDropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const NavDropdownLink = styled(Link)`
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 18px;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }
`;

export const NavDropdownTitle = styled.span`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
`;

export const NavDropdownCopy = styled.span`
  color: rgba(255, 255, 255, 0.68);
  font-size: 13px;
  line-height: 1.6;
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

export const HeaderDesktopActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 1180px) {
    display: none;
  }
`;

const headerButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 22px;
  border-radius: 999px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const GhostAction = styled.button`
  ${headerButton}
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
`;

export const PrimaryAction = styled.button`
  ${headerButton}
  border: 0;
  background: #ffffff;
  color: #050b20;
`;

export const MobileMenuToggle = styled.button`
  ${headerButton}
  display: none;
  min-width: 50px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;

  @media (max-width: 1180px) {
    display: inline-flex;
  }
`;

export const MobileNavPanel = styled.div`
  grid-column: 1 / -1;
  display: none;

  @media (max-width: 1180px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
  }
`;

export const MobileNavSurface = styled.div`
  display: grid;
  gap: 16px;
  padding: 18px;
  border-radius: 28px;
  border: 1px solid rgba(217, 224, 242, 0.18);
  background: rgba(9, 14, 34, 0.94);
  box-shadow: 0 24px 50px rgba(5, 11, 32, 0.28);
  backdrop-filter: blur(18px);
`;

export const MobileNavList = styled.div`
  display: grid;
  gap: 10px;
`;

export const MobileNavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 0 16px;
  border-radius: 16px;
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.84)")};
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.04)"};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }
`;

export const MobileNavGroup = styled.div`
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MobileNavGroupTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

export const MobileNavSubgrid = styled.div`
  display: grid;
  gap: 8px;
`;

export const MobileNavSublink = styled(Link)`
  display: grid;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 16px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

export const MobileNavSublinkTitle = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

export const MobileNavSublinkCopy = styled.span`
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  line-height: 1.55;
`;

export const MobileNavActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroPanel = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: clamp(72px, 10vw, 118px) auto 0;
  display: grid;
  justify-items: center;
  gap: 28px;
`;

export const Eyebrow = styled.div`
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  max-width: 740px;
  margin: 0;
  text-align: center;
  font-size: clamp(52px, 7vw, 78px);
  line-height: 0.96;
  letter-spacing: -0.04em;
`;

export const HeroSubtitle = styled.p`
  max-width: 620px;
  margin: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.7;
`;

export const QuickToggleRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const QuickToggleButton = styled.button`
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.18)"};
  border-radius: 999px;
  padding: 12px 20px;
  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.08)"};
  color: ${({ $active }) => ($active ? "#050b20" : "#ffffff")};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
`;

export const FilterBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
  width: min(100%, 900px);
  gap: 16px;
  padding: 18px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 80px rgba(5, 11, 32, 0.16);

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterField = styled.label`
  display: grid;
  gap: 6px;
  padding: 14px 18px;
  border-radius: 20px;
  background: #f3f6fb;
  color: #6c768d;

  span {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const FilterSelect = styled.select`
  border: 0;
  outline: 0;
  background: transparent;
  color: #050b20;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`;

export const SearchAction = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: 22px;
  padding: 0 26px;
  background: #405ff2;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #2f4ce1;
  }

  @media (max-width: 680px) {
    min-height: 58px;
  }
`;

export const ResultsMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
`;

export const SubtleAction = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const CategoryChips = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CategoryChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.16)"};
  border-radius: 999px;
  padding: 11px 18px;
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`;

export const BodyCenter = styled.main`
  position: relative;
  z-index: 2;
  margin-top: -112px;
  padding: clamp(36px, 4vw, 64px) clamp(20px, 4vw, 56px) 88px;
  border-radius: 48px 48px 0 0;
  background: #f9fbfc;
`;

export const BodyContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 64px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 26px;
  flex-wrap: wrap;
`;

export const SectionTitleGroup = styled.div`
  display: grid;
  gap: 8px;
  max-width: 560px;
`;

export const SectionKicker = styled.div`
  color: #405ff2;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.1;
`;

export const SectionCopy = styled.p`
  margin: 0;
  color: #6c768d;
  line-height: 1.7;
`;

export const SectionAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d6deeb;
  border-radius: 999px;
  padding: 12px 18px;
  background: #ffffff;
  color: #050b20;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const ViewToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const ViewToggleButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? "#405ff2" : "#d6deeb")};
  border-radius: 999px;
  padding: 11px 16px;
  background: ${({ $active }) => ($active ? "#405ff2" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#050b20")};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
`;

export const BrandCard = styled.button`
  display: grid;
  justify-items: center;
  gap: 14px;
  padding: 22px;
  border: 1px solid ${({ $active }) => ($active ? "#405ff2" : "#e1e7f0")};
  border-radius: 24px;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(180deg, rgba(64, 95, 242, 0.08) 0%, #ffffff 100%)"
      : "#ffffff"};
  text-align: center;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(5, 11, 32, 0.05);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #405ff2;
  }
`;

export const BrandLogoWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: #f3f6fb;

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

export const BrandFallback = styled.div`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #050b20;
`;

export const BrandName = styled.div`
  color: #050b20;
  font-size: 20px;
  font-weight: 700;
`;

export const BrandHint = styled.div`
  color: #6c768d;
  line-height: 1.6;
`;

export const InventoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

export const InventoryCard = styled.article`
  overflow: hidden;
  border: 1px solid #e1e7f0;
  border-radius: 26px;
  background: #ffffff;
  box-shadow: 0 14px 40px rgba(5, 11, 32, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #d2dcf0;
    box-shadow: 0 18px 44px rgba(5, 11, 32, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

export const InventoryCardBody = styled.div`
  display: grid;
  gap: 16px;
  padding: 22px;
`;

export const CardBadgeRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CardBadge = styled.span`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === "secondary" ? "#eef2ff" : "rgba(64, 95, 242, 0.12)"};
  color: ${({ $tone }) => ($tone === "secondary" ? "#2f4ce1" : "#405ff2")};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
  line-height: 1.2;
`;

export const CardSubtitle = styled.div`
  color: #6c768d;
  line-height: 1.5;
`;

export const CardPrice = styled.div`
  color: #050b20;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const CardPriceLine = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CardPriceNote = styled.div`
  color: #6c768d;
  font-size: 14px;
  font-weight: 700;
`;

export const CardMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 18px;
  background: #f3f6fb;
  color: #4d5871;
  font-size: 14px;
  font-weight: 600;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 4px;
  border-top: 1px solid #edf1f6;
  color: #6c768d;
  font-size: 14px;
  font-weight: 600;
`;

export const CardLinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #405ff2;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #2342d7;
    transform: translateX(2px);
  }
`;

export const EmptyState = styled.div`
  display: grid;
  gap: 14px;
  justify-items: start;
  padding: 28px;
  border: 1px dashed #cbd5e1;
  border-radius: 24px;
  background: #ffffff;

  h3,
  p {
    margin: 0;
  }

  p {
    max-width: 560px;
    color: #6c768d;
    line-height: 1.7;
  }
`;

export const PromoSection = styled.section`
  padding: 6px 0;
`;

export const PromoCard = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
  gap: 24px;
  padding: clamp(24px, 4vw, 36px);
  border-radius: 30px;
  background:
    radial-gradient(circle at top left, rgba(64, 95, 242, 0.18), transparent 40%),
    linear-gradient(180deg, #ffffff 0%, #f3f6fb 100%);
  border: 1px solid #dce4f0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const PromoArtwork = styled.div`
  min-height: 280px;
  border-radius: 24px;
  background:
    radial-gradient(circle at 30% 64%, rgba(5, 11, 32, 0.12) 0 34%, transparent 35%),
    linear-gradient(135deg, transparent 44%, rgba(5, 11, 32, 0.12) 45% 100%),
    #eef3f8;
`;

export const PromoContent = styled.div`
  display: grid;
  gap: 18px;
`;

export const PromoTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.05;

  span {
    color: #405ff2;
  }
`;

export const PromoDescription = styled.p`
  margin: 0;
  max-width: 620px;
  color: #526079;
  line-height: 1.8;
`;

export const PromoBulletList = styled.div`
  display: grid;
  gap: 10px;
`;

export const PromoBullet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #050b20;
  font-weight: 600;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #405ff2;
    flex: 0 0 auto;
  }
`;

export const PromoPrimaryAction = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border: 0;
  border-radius: 999px;
  background: #050b20;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const PromoStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const PromoStatCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 0 8px;
  background: transparent;
  border: 0;
  text-align: center;
`;

export const PromoStatValue = styled.div`
  color: #050b20;
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const PromoStatLabel = styled.div`
  color: #526079;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const BenefitCard = styled.article`
  display: grid;
  gap: 16px;
  padding: 26px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e1e7f0;
  box-shadow: 0 12px 32px rgba(5, 11, 32, 0.05);
`;

export const BenefitIconWrap = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(64, 95, 242, 0.12);
  color: #405ff2;
`;

export const BenefitTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 22px;
`;

export const BenefitCopy = styled.p`
  margin: 0;
  color: #6c768d;
  line-height: 1.7;
`;

export const DarkSection = styled.section`
  padding: 38px;
  border-radius: 32px;
  background: #070b1d;
  color: #ffffff;

  @media (max-width: 720px) {
    padding: 24px;
  }
`;

export const DarkSectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 18px;

  ${SectionTitle} {
    color: #ffffff;
    margin-bottom: 8px;
  }

  ${SectionCopy} {
    color: rgba(255, 255, 255, 0.62);
    max-width: 520px;
  }
`;

export const DarkSectionAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

export const DarkTabsRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 22px;
`;

export const DarkTabButton = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.12)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.62)"};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const DarkCarCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
`;

export const DarkCarCard = styled.article`
  display: grid;
  gap: 14px;
  padding: 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const DarkCarCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.72);

  span {
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(64, 95, 242, 0.9);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const DarkCarFavoriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.84);
  cursor: pointer;
  transition:
    background-color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.24);
    transform: translateY(-1px);
  }
`;

export const DarkCarImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 18px;
`;

export const DarkCarCardBody = styled.div`
  display: grid;
  gap: 8px;
`;

export const DarkCarTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.3;
`;

export const DarkCarMeta = styled.div`
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.6;
  font-size: 14px;
`;

export const DarkCarCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DarkCarPrice = styled.div`
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
`;

export const LinkColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding-top: 8px;
`;

export const LinkColumn = styled.div`
  display: grid;
  gap: 12px;
  align-content: start;
`;

export const LinkColumnTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 15px;
  font-weight: 800;
`;

export const LinkListAnchor = styled.a`
  display: inline-flex;
  width: fit-content;
  color: #6c768d;
  text-decoration: none;
  line-height: 1.6;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #405ff2;
    transform: translateX(2px);
  }
`;

export const TestimonialWrap = styled.div`
  border-radius: 30px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
  border: 1px solid #e3e9f2;
  overflow: hidden;
`;

export const TestimonialCard = styled.div`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 28px;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialAvatar = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  background: #eef3f8;
`;

export const TestimonialContent = styled.div`
  display: grid;
  gap: 10px;
  padding: 24px 28px 24px 0;

  @media (max-width: 860px) {
    padding: 0 24px 24px;
  }
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  color: #f4b400;
  font-size: 14px;
  font-weight: 700;
`;

export const TestimonialName = styled.div`
  color: #050b20;
  font-size: 18px;
  font-weight: 800;
`;

export const TestimonialRole = styled.div`
  color: #6c768d;
  font-size: 14px;
`;

export const TestimonialQuote = styled.blockquote`
  margin: 8px 0 0;
  color: #050b20;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.45;
  letter-spacing: -0.02em;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
`;

export const BlogCard = styled.article`
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e3e9f2;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #d6deeb;
    box-shadow: 0 18px 44px rgba(5, 11, 32, 0.08);
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const BlogCardBody = styled.div`
  display: grid;
  gap: 10px;
  padding: 18px;
`;

export const BlogCardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const BlogPill = styled.div`
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eff4fb;
  color: #405ff2;
  font-size: 12px;
  font-weight: 700;
`;

export const BlogMeta = styled.div`
  color: #6c768d;
  font-size: 13px;
`;

export const BlogTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 20px;
  line-height: 1.45;
`;

export const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const CtaCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 28px;
  border-radius: 28px;
  background: ${({ $tone }) =>
    $tone === "pink"
      ? "linear-gradient(180deg, #fde9f1 0%, #fae0eb 100%)"
      : "linear-gradient(180deg, #e8f2ff 0%, #dfeeff 100%)"};

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const CtaTitle = styled.h3`
  margin: 0 0 12px;
  color: #050b20;
  font-size: 28px;
  line-height: 1.2;
`;

export const CtaCopy = styled.p`
  margin: 0 0 18px;
  max-width: 360px;
  color: #526079;
  line-height: 1.7;
`;

export const CtaPrimaryAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  background: #050b20;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const CtaIconWrap = styled.div`
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: ${({ $tone }) =>
    $tone === "pink" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.66)"};
  color: ${({ $tone }) => ($tone === "pink" ? "#ff5da2" : "#405ff2")};
`;

export const FooterShell = styled.footer`
  margin-top: -1px;
  padding: 40px clamp(20px, 4vw, 56px) 26px;
  border-radius: 48px 48px 0 0;
  background: #070b1d;
  color: rgba(255, 255, 255, 0.76);
`;

export const InventoryFooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const InventoryPager = styled.div`
  display: flex;
  gap: 10px;
`;

export const PagerButton = styled.button`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid #d6deeb;
  border-radius: 999px;
  background: #ffffff;
  color: #050b20;
  cursor: pointer;
`;

export const FooterTop = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
`;

export const FooterTopText = styled.div`
  h3 {
    margin: 0 0 8px;
    color: #ffffff;
    font-size: 24px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
  }
`;

export const FooterNewsletter = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const NewsletterInput = styled.input`
  min-width: 260px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font: inherit;

  &:focus {
    outline: none;
    border-color: rgba(154, 176, 255, 0.78);
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.16);
  }
`;

export const NewsletterButton = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 14px 20px;
  background: #405ff2;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #3152ef;
  }
`;

export const FooterHelperText = styled.div`
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  line-height: 1.5;
`;

export const FooterColumns = styled.div`
  max-width: 1280px;
  margin: 28px auto 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
`;

export const FooterColumnTitle = styled.h4`
  margin: 0 0 6px;
  color: #ffffff;
  font-size: 15px;
`;

export const FooterLink = styled.a`
  display: inline-flex;
  width: fit-content;
  color: rgba(255, 255, 255, 0.62);
  text-decoration: none;
  line-height: 1.6;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(2px);
  }
`;

export const FooterAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const FooterSocialRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FooterSocialButton = styled.a`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 28px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
