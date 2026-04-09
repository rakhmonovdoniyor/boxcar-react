import styled from "styled-components";

export const InventoryListStack = styled.div`
  display: grid;
  gap: 16px;
`;

export const InventoryListCard = styled.article`
  display: grid;
  grid-template-columns: ${({ $compact }) =>
    $compact ? "190px minmax(0, 1fr)" : "250px minmax(0, 1fr) 150px"};
  gap: 20px;
  align-items: center;
  padding: 14px;
  border: 1px solid #e3e9f2;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(5, 11, 32, 0.05);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #d2dcf0;
    box-shadow: 0 18px 40px rgba(5, 11, 32, 0.09);
  }

  @media (max-width: 1120px) {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const InventoryListMedia = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #eef3f8;
`;

export const InventoryListImage = styled.img`
  width: 100%;
  height: ${({ $compact }) => ($compact ? "160px" : "190px")};
  object-fit: cover;
  display: block;
`;

export const InventoryListBody = styled.div`
  display: grid;
  gap: 14px;
  min-width: 0;
`;

export const InventoryListTopRow = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
`;

export const InventoryListHeading = styled.div`
  display: grid;
  gap: 6px;
`;

export const InventoryListTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: ${({ $compact }) => ($compact ? "18px" : "22px")};
  line-height: 1.25;
`;

export const InventoryListSubtitle = styled.div`
  color: #6c768d;
  font-size: 13px;
  line-height: 1.6;
`;

export const InventoryListMetaGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $compact }) =>
    $compact ? "repeat(3, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))"};
  gap: 10px;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const InventoryListMetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #526079;
  font-size: 13px;
  font-weight: 600;
`;

export const InventoryListDescription = styled.p`
  margin: 0;
  color: #526079;
  font-size: 14px;
  line-height: 1.8;
`;

export const InventoryListSide = styled.div`
  display: grid;
  gap: 12px;
  justify-items: end;

  @media (max-width: 1120px) {
    grid-column: 1 / -1;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-items: start;
    padding-top: 6px;
    border-top: 1px solid #edf1f6;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;

export const InventoryListPrice = styled.div`
  color: #050b20;
  font-size: ${({ $compact }) => ($compact ? "22px" : "28px")};
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const InventoryListPriceNote = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 600;
`;

export const InventoryListAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 130px;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #dce4f0;
  border-radius: 14px;
  background: ${({ $primary }) => ($primary ? "#405ff2" : "#ffffff")};
  color: ${({ $primary }) => ($primary ? "#ffffff" : "#050b20")};
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
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

export const InventoryListCompactFooter = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 4px;
  border-top: 1px solid #edf1f6;
`;
