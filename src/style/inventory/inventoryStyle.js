import styled from "styled-components";
import { Link } from "react-router-dom";

export const InventoryPageShell = styled.div`
  min-height: 100vh;
  background: #070b1d;
`;

export const InventoryHeroShell = styled.section`
  padding: 28px clamp(20px, 4vw, 56px) 142px;
  background: #070b1d;
`;

export const InventoryToolbarDock = styled.div`
  max-width: 1280px;
  margin: 28px auto 0;
`;

export const InventoryToolbar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto auto;
  gap: 10px;
  align-items: stretch;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);

  @media (max-width: 1160px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-radius: 28px;
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const InventoryToolbarField = styled.label`
  display: grid;
  gap: 6px;
  padding: 12px 18px;
  border-radius: 20px;
  background: #f7f9fc;
`;

export const InventoryToolbarLabel = styled.span`
  color: #6c768d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const InventoryToolbarSelect = styled.select`
  border: 0;
  outline: 0;
  background: transparent;
  color: #050b20;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`;

const toolbarButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 64px;
  padding: 0 20px;
  border-radius: 20px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const InventoryMoreFiltersButton = styled.button`
  ${toolbarButton}
  border: 1px solid #dce4f0;
  background: #ffffff;
  color: #050b20;
`;

export const InventoryResultsButton = styled.button`
  ${toolbarButton}
  border: 0;
  background: #405ff2;
  color: #ffffff;
`;

export const InventoryExtraFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 16px;
  padding: 20px 24px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const InventoryFilterGroup = styled.div`
  display: grid;
  gap: 12px;
`;

export const InventoryFilterGroupTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
`;

export const InventoryChipRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const InventoryChip = styled.button`
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255, 255, 255, 0.86)" : "rgba(255, 255, 255, 0.16)"};
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.05)"};
  color: #ffffff;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const InventoryCheckboxRow = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: 600;

  input {
    accent-color: #405ff2;
  }
`;

export const InventoryMain = styled.main`
  margin-top: -66px;
  padding: 0 clamp(20px, 4vw, 56px) 0;
`;

export const InventoryMainInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px clamp(22px, 4vw, 42px) 54px;
  border-radius: 34px;
  background: #ffffff;
`;

export const InventoryBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #90a0be;
  font-size: 13px;
  margin-bottom: 6px;
`;

export const InventoryBreadcrumbLink = styled(Link)`
  color: #405ff2;
  text-decoration: none;
`;

export const InventoryBreadcrumbCurrent = styled.span`
  color: #90a0be;
`;

export const InventoryTitleRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin: 18px 0 28px;
  flex-wrap: wrap;
`;

export const InventoryHeadingGroup = styled.div`
  display: grid;
  gap: 8px;
`;

export const InventoryHeading = styled.h1`
  margin: 0;
  color: #050b20;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 1.12;
`;

export const InventorySubMeta = styled.div`
  color: #6c768d;
  font-size: 14px;
`;

export const InventorySortWrap = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #6c768d;
  font-size: 14px;
  font-weight: 600;
`;

export const InventorySortSelect = styled.select`
  border: 0;
  outline: 0;
  background: transparent;
  color: #050b20;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const InventoryListingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns = 4 }) => $columns}, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const InventoryListingCard = styled.article`
  overflow: hidden;
  border: 1px solid #e3e9f2;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(5, 11, 32, 0.05);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #d2dcf0;
    box-shadow: 0 18px 40px rgba(5, 11, 32, 0.09);
  }
`;

export const InventoryListingMedia = styled.div`
  position: relative;
`;

export const InventoryListingImage = styled.img`
  width: 100%;
  height: 174px;
  object-fit: cover;
  display: block;
`;

export const InventoryListingBadge = styled.span`
  position: absolute;
  left: 14px;
  top: 14px;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === "green" ? "#3d923a" : "rgba(64, 95, 242, 0.96)"};
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const InventoryListingFavorite = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #050b20;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.04);
    background: #ffffff;
  }
`;

export const InventoryListingBody = styled.div`
  display: grid;
  gap: 14px;
  padding: 16px 18px 18px;
`;

export const InventoryListingTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 18px;
  line-height: 1.35;
`;

export const InventoryListingSubtitle = styled.div`
  color: #6c768d;
  font-size: 13px;
  line-height: 1.6;
`;

export const InventoryListingMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding: 14px 0;
  border-top: 1px solid #edf1f6;
  border-bottom: 1px solid #edf1f6;
`;

export const InventoryListingMetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #526079;
  font-size: 13px;
  font-weight: 600;
`;

export const InventoryListingPriceRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
`;

export const InventoryListingPriceBlock = styled.div`
  display: grid;
  gap: 4px;
`;

export const InventoryListingPrice = styled.div`
  color: #050b20;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const InventoryListingNote = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 600;
`;

export const InventoryListingLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #405ff2;
  font: inherit;
  font-size: 13px;
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

export const InventoryPaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
`;

export const InventoryPaginationInfo = styled.div`
  color: #6c768d;
  font-size: 13px;
`;

export const InventoryPaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const InventoryPageButton = styled.button`
  min-width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0 14px;
  border: 1px solid ${({ $active }) => ($active ? "#050b20" : "#dce4f0")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#050b20" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#050b20")};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
`;

export const InventoryEmptyState = styled.div`
  display: grid;
  gap: 12px;
  justify-items: start;
  padding: 28px;
  border: 1px dashed #d6deeb;
  border-radius: 24px;
  background: #f9fbfc;

  h3,
  p {
    margin: 0;
  }

  p {
    color: #6c768d;
    line-height: 1.7;
  }
`;
