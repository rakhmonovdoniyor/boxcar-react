import styled from "styled-components";

export const ShopPageShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(47, 76, 204, 0.22), transparent 34%),
    #050b1f;
  color: #0e1731;
`;

export const ShopHeroShell = styled.div`
  padding: 28px 48px 0;

  @media (max-width: 1024px) {
    padding: 24px 24px 0;
  }
`;

export const ShopMain = styled.main`
  padding: 0 48px 48px;

  @media (max-width: 1024px) {
    padding: 0 24px 32px;
  }
`;

export const ShopSurface = styled.section`
  max-width: 1480px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 36px;
  padding: 22px 36px 42px;
  box-shadow: 0 30px 80px rgba(6, 14, 40, 0.24);

  @media (max-width: 900px) {
    padding: 20px 18px 28px;
    border-radius: 28px;
  }
`;

export const ShopBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7081a8;
  font-size: 13px;
  margin-bottom: 18px;
`;

export const ShopBreadcrumbLink = styled.a`
  color: #335cff;
  text-decoration: none;
`;

export const ShopBreadcrumbCurrent = styled.span`
  color: #97a1bd;
`;

export const ShopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ShopTitleGroup = styled.div`
  display: grid;
  gap: 10px;
`;

export const ShopTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #0b1436;
`;

export const ShopResultsCopy = styled.p`
  margin: 0;
  color: #6f7d9e;
  font-size: 15px;
`;

export const ShopToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const ShopCartBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: #eef2ff;
  color: #335cff;
  font-weight: 600;
  font-size: 14px;
`;

export const ShopSortLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #6f7d9e;
  font-size: 14px;
  font-weight: 600;
`;

export const ShopSortSelect = styled.select`
  min-width: 168px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid #dbe3fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopContentGrid = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 32px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopSidebar = styled.aside`
  align-self: start;
  padding: 22px;
  border: 1px solid #e6ebf7;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(241, 245, 255, 0.55), rgba(255, 255, 255, 0.9)),
    #ffffff;
`;

export const ShopFilterGroup = styled.section`
  display: grid;
  gap: 14px;

  & + & {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid #edf1f8;
  }
`;

export const ShopFilterTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  color: #0e1731;
`;

export const ShopOptionList = styled.div`
  display: grid;
  gap: 10px;
`;

export const ShopOptionButton = styled.button<{ $active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid ${({ $active }) => ($active ? "#335cff" : "#e5ebfb")};
  background: ${({ $active }) => ($active ? "#eef2ff" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1630ad" : "#45516d")};
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
`;

export const ShopOptionCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 26px;
  padding: 0 8px;
  border-radius: 999px;
  background: #f3f5fb;
  color: #5d6c8e;
  font-size: 12px;
  font-weight: 700;
`;

export const ShopPriceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #0e1731;
  font-size: 14px;
  font-weight: 700;
`;

export const ShopPriceValue = styled.span`
  color: #335cff;
`;

export const ShopPriceInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const ShopPriceInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopRangeSlider = styled.div`
  position: relative;
  height: 32px;
`;

export const ShopRangeTrack = styled.div`
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 999px;
  background: #e5ebfb;
`;

export const ShopRangeProgress = styled.div`
  position: absolute;
  top: 14px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #335cff, #5871ff);
`;

export const ShopRangeInput = styled.input.attrs({ type: "range" })`
  position: absolute;
  inset: 0;
  width: 100%;
  appearance: none;
  background: transparent;
  pointer-events: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #335cff;
    border: 3px solid #ffffff;
    box-shadow: 0 4px 14px rgba(51, 92, 255, 0.28);
    pointer-events: auto;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #335cff;
    border: 3px solid #ffffff;
    box-shadow: 0 4px 14px rgba(51, 92, 255, 0.28);
    pointer-events: auto;
    cursor: pointer;
  }
`;

export const ShopCatalog = styled.div`
  display: grid;
  gap: 28px;
`;

export const ShopProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopProductCard = styled.article`
  display: grid;
  gap: 14px;
  padding: 16px;
  border: 1px solid #e6ebf7;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(12, 20, 52, 0.05);
`;

export const ShopProductVisual = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 186px;
  border-radius: 18px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), transparent 35%),
    linear-gradient(135deg, #eef2fb, #dfe6f7);
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
  }

  &::before {
    width: 120px;
    height: 120px;
    right: -28px;
    top: -24px;
  }

  &::after {
    width: 90px;
    height: 90px;
    left: -18px;
    bottom: -20px;
  }

  svg {
    position: relative;
    z-index: 1;
    font-size: 68px;
    color: #7a89aa;
  }
`;

export const ShopProductBody = styled.div`
  display: grid;
  gap: 10px;
`;

export const ShopRatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6f7d9e;
  font-size: 13px;
`;

export const ShopStars = styled.div`
  display: inline-flex;
  gap: 2px;
  color: #335cff;
`;

export const ShopProductName = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 1.25;
  color: #0e1731;
`;

export const ShopProductSku = styled.p`
  margin: 0;
  font-size: 13px;
  color: #6f7d9e;
`;

export const ShopProductSummary = styled.p`
  margin: 0;
  color: #546481;
  font-size: 14px;
  line-height: 1.55;
`;

export const ShopProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 2px;
`;

export const ShopPrice = styled.div`
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
  color: #0e1731;
`;

export const ShopPriceNote = styled.div`
  margin-top: 6px;
  color: #6f7d9e;
  font-size: 12px;
`;

export const ShopAddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid #d7def7;
  background: #ffffff;
  color: #335cff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #335cff;
    box-shadow: 0 12px 24px rgba(51, 92, 255, 0.16);
  }
`;

export const ShopPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ShopPageButton = styled.button<{ $active?: boolean }>`
  min-width: 38px;
  height: 38px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "#0b1436" : "#dce4fb")};
  background: ${({ $active }) => ($active ? "#0b1436" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#637292")};
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const ShopPageInfo = styled.p`
  margin: 0;
  text-align: center;
  color: #6f7d9e;
  font-size: 13px;
`;

export const ShopEmptyState = styled.div`
  padding: 40px 24px;
  border: 1px dashed #dce4fb;
  border-radius: 24px;
  text-align: center;
  color: #546481;

  h3 {
    margin: 0 0 10px;
    color: #0e1731;
  }

  p {
    margin: 0;
  }
`;
