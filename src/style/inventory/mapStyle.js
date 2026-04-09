import styled from "styled-components";

export const InventorySplitMain = styled.main`
  margin-top: -54px;
  padding: 0 clamp(20px, 4vw, 56px) 0;
`;

export const InventorySplitSurface = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 34px;
  background: #ffffff;
`;

export const InventorySplitLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(520px, 0.9fr) minmax(360px, 1.1fr);
  gap: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const InventorySplitLeft = styled.div`
  display: grid;
  align-content: start;
  gap: 18px;
  min-width: 0;
`;

export const InventorySplitToolbar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  gap: 10px;
  padding: 12px;
  border-radius: 24px;
  background: #f8faff;
  border: 1px solid #edf1f6;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const InventorySplitField = styled.label`
  display: grid;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #edf1f6;

  span {
    color: #6c768d;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

export const InventorySplitSelect = styled.select`
  border: 0;
  outline: 0;
  background: transparent;
  color: #050b20;
  font: inherit;
  font-weight: 600;
`;

export const InventorySplitMoreButton = styled.button`
  min-height: 64px;
  border: 1px solid #dce4f0;
  border-radius: 18px;
  padding: 0 16px;
  background: #ffffff;
  color: #050b20;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const InventorySplitHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 4px;
  flex-wrap: wrap;
`;

export const InventorySplitCount = styled.div`
  color: #526079;
  font-size: 14px;
  font-weight: 600;
`;

export const InventorySplitMap = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 860px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 78% 48%, rgba(64, 95, 242, 0.22) 0 8%, transparent 9%),
    radial-gradient(circle at 38% 64%, rgba(64, 95, 242, 0.18) 0 7%, transparent 8%),
    radial-gradient(circle at 58% 34%, rgba(64, 95, 242, 0.16) 0 8%, transparent 9%),
    linear-gradient(rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(135deg, #eef6ff 0%, #dbeafe 44%, #e8f1ff 44%, #f4f8ff 100%);
  background-size: auto, auto, auto, 42px 42px, 42px 42px, auto;

  @media (max-width: 1180px) {
    min-height: 520px;
  }
`;

export const InventoryMapLabel = styled.div`
  position: absolute;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  padding: 10px 14px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#050b20" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#050b20")};
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(5, 11, 32, 0.12);
`;

export const InventoryMapPopup = styled.div`
  position: absolute;
  left: 50%;
  top: 26%;
  width: min(280px, calc(100% - 32px));
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgba(5, 11, 32, 0.16);
`;

export const InventoryMapPopupImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

export const InventoryMapPopupBody = styled.div`
  display: grid;
  gap: 8px;
  padding: 18px;
`;

export const InventoryMapPopupTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
`;

export const InventoryMapPopupMeta = styled.div`
  color: #526079;
  font-size: 13px;
`;

export const InventoryMapPopupPrice = styled.div`
  color: #050b20;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;
