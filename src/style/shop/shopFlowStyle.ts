import styled from "styled-components";

export const ShopFlowGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopTableCard = styled.section`
  border: 1px solid #e6ebf7;
  border-radius: 26px;
  overflow: hidden;
  background: #ffffff;
`;

export const ShopTableHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) 120px 140px 120px 56px;
  gap: 12px;
  padding: 16px 20px;
  background: #f2f6ff;
  color: #59709c;
  font-size: 13px;
  font-weight: 700;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const ShopTableBody = styled.div`
  display: grid;
`;

export const ShopTableRow = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) 120px 140px 120px 56px;
  gap: 12px;
  padding: 20px;
  align-items: center;
  border-top: 1px solid #edf1f8;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ShopProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ShopProductMiniVisual = styled.div<{ $tone?: "soft" | "blue" | "midnight" }>`
  width: 72px;
  height: 72px;
  flex: 0 0 auto;
  border-radius: 18px;
  border: 1px solid #e6ebf7;
  background: ${({ $tone }) =>
    $tone === "midnight"
      ? "linear-gradient(135deg, #16224c, #0a0f25)"
      : $tone === "blue"
        ? "linear-gradient(135deg, #eef2ff, #d8e0ff)"
        : "linear-gradient(135deg, #f6f8fc, #e8edf8)"};
  display: grid;
  place-items: center;
  color: ${({ $tone }) => ($tone === "midnight" ? "#f8fbff" : "#7a89aa")};
`;

export const ShopProductCellBody = styled.div`
  display: grid;
  gap: 4px;
`;

export const ShopProductCellTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #0e1731;
`;

export const ShopProductCellMeta = styled.p`
  margin: 0;
  color: #6f7d9e;
  font-size: 13px;
`;

export const ShopTableValue = styled.div`
  color: #0e1731;
  font-weight: 700;
`;

export const ShopInlineQuantity = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid #dae3f8;
  background: #ffffff;
`;

export const ShopInlineQuantityButton = styled.button`
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #eef2ff;
  color: #335cff;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const ShopInlineQuantityValue = styled.span`
  min-width: 38px;
  text-align: center;
  color: #0e1731;
  font-weight: 700;
`;

export const ShopIconGhostButton = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid #dbe3fb;
  border-radius: 50%;
  background: #ffffff;
  color: #6d7c9b;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const ShopSummaryCard = styled.aside`
  align-self: start;
  display: grid;
  gap: 16px;
  padding: 22px;
  border: 1px solid #e6ebf7;
  border-radius: 26px;
  background: #ffffff;
`;

export const ShopSummaryTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #0b1436;
`;

export const ShopSummaryList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ShopSummaryRow = styled.div<{ $emphasis?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: ${({ $emphasis }) => ($emphasis ? "#0e1731" : "#6b7a99")};
  font-size: ${({ $emphasis }) => ($emphasis ? "16px" : "14px")};
  font-weight: ${({ $emphasis }) => ($emphasis ? 800 : 600)};
`;

export const ShopFlowPrimaryButton = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #335cff, #5871ff);
  color: #ffffff;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const ShopFlowGhostButton = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 18px;
  border: 1px solid #dbe3fb;
  border-radius: 999px;
  background: #ffffff;
  color: #335cff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const ShopFlowActionRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;

  > * {
    flex: 1 1 180px;
  }
`;

export const ShopCouponRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 170px;
  gap: 12px;
  margin-top: 18px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopCouponInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopCheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopCheckoutForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const ShopCheckoutSection = styled.section`
  display: grid;
  gap: 14px;
`;

export const ShopCheckoutSectionTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #0b1436;
`;

export const ShopCheckoutFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopCheckoutInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopCheckoutSelect = styled.select`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopCheckoutTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: vertical;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopCheckoutSideCard = styled.div`
  display: grid;
  gap: 18px;
  padding: 22px;
  border: 1px solid #e6ebf7;
  border-radius: 26px;
  background: #ffffff;
`;

export const ShopOrderList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ShopOrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  color: #6f7d9e;
  font-size: 14px;
`;

export const ShopPaymentList = styled.div`
  display: grid;
  gap: 10px;
`;

export const ShopPaymentOption = styled.label<{ $active?: boolean }>`
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid ${({ $active }) => ($active ? "#335cff" : "#e6ebf7")};
  background: ${({ $active }) => ($active ? "#eef2ff" : "#ffffff")};
  cursor: pointer;

  input {
    display: none;
  }
`;

export const ShopPaymentTitle = styled.span`
  color: #0e1731;
  font-weight: 700;
`;

export const ShopPaymentCopy = styled.span`
  color: #6f7d9e;
  font-size: 13px;
  line-height: 1.5;
`;

export const ShopCompleteShell = styled.section`
  display: grid;
  gap: 28px;
  max-width: 760px;
  margin: 0 auto;
  padding: 36px 0 18px;
`;

export const ShopCompleteHero = styled.div`
  display: grid;
  justify-items: center;
  gap: 12px;
  text-align: center;
`;

export const ShopCompleteBadge = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #eef2ff;
  color: #335cff;
  font-weight: 800;
`;

export const ShopCompleteTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #0b1436;
`;

export const ShopCompleteCopy = styled.p`
  margin: 0;
  color: #6f7d9e;
  font-size: 15px;
`;

export const ShopCompleteMetaCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  padding: 18px 20px;
  border-radius: 24px;
  border: 1px dashed #7f9dff;
  background: #f8faff;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ShopCompleteMetaItem = styled.div`
  display: grid;
  gap: 6px;
`;

export const ShopCompleteMetaLabel = styled.div`
  color: #7a8bb0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ShopCompleteMetaValue = styled.div`
  color: #0e1731;
  font-weight: 700;
`;
