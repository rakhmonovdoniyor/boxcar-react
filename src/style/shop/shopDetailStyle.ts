import styled from "styled-components";

export const ShopDetailTopGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(320px, 0.84fr);
  gap: 36px;
  margin-bottom: 42px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopDetailVisualColumn = styled.div`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr);
  gap: 18px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopDetailThumbRail = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ShopDetailThumb = styled.button<{ $active?: boolean; $tone: string }>`
  min-height: 86px;
  border-radius: 20px;
  border: 1px solid ${({ $active }) => ($active ? "#335cff" : "#e2e8f8")};
  background: ${({ $tone }) =>
    $tone === "midnight"
      ? "linear-gradient(135deg, #16224c, #0a0f25)"
      : $tone === "blue"
        ? "linear-gradient(135deg, #eef2ff, #d8e0ff)"
        : "linear-gradient(135deg, #f6f8fc, #e8edf8)"};
  color: ${({ $tone }) => ($tone === "midnight" ? "#f8fbff" : "#6f7d9e")};
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ShopDetailMainVisual = styled.div<{ $tone: string }>`
  min-height: 420px;
  border-radius: 32px;
  border: 1px solid #e6ebf7;
  background: ${({ $tone }) =>
    $tone === "midnight"
      ? "radial-gradient(circle at top right, rgba(76, 97, 255, 0.28), transparent 28%), linear-gradient(135deg, #131e48, #060c21)"
      : $tone === "blue"
        ? "radial-gradient(circle at top left, rgba(255, 255, 255, 0.88), transparent 30%), linear-gradient(135deg, #edf2ff, #d4ddff)"
        : "radial-gradient(circle at top left, rgba(255, 255, 255, 0.9), transparent 32%), linear-gradient(135deg, #f3f6fb, #e6ebf7)"};
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
  }

  &::before {
    width: 220px;
    height: 220px;
    top: -50px;
    right: -40px;
  }

  &::after {
    width: 180px;
    height: 180px;
    bottom: -70px;
    left: -30px;
  }

  svg {
    position: relative;
    z-index: 1;
    color: ${({ $tone }) => ($tone === "midnight" ? "#f8fbff" : "#7a89aa")};
  }
`;

export const ShopDetailInfoColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 18px;
`;

export const ShopDetailCategory = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: #eef2ff;
  color: #335cff;
  font-size: 13px;
  font-weight: 700;
`;

export const ShopDetailTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.9rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #0b1436;
`;

export const ShopDetailRatingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: #637292;
  font-size: 14px;
`;

export const ShopDetailPrice = styled.div`
  font-size: 42px;
  font-weight: 800;
  line-height: 1;
  color: #0e1731;
`;

export const ShopDetailSummary = styled.p`
  margin: 0;
  color: #546481;
  line-height: 1.7;
  font-size: 15px;
`;

export const ShopDetailActionRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ShopQuantityControl = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid #d9e1f7;
  background: #ffffff;
`;

export const ShopQuantityButton = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: #eef2ff;
  color: #335cff;
  font: inherit;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const ShopQuantityValue = styled.span`
  min-width: 46px;
  text-align: center;
  color: #0e1731;
  font-weight: 700;
`;

export const ShopPrimaryCta = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 180px;
  padding: 14px 20px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #335cff, #5a74ff);
  color: #ffffff;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 16px 34px rgba(51, 92, 255, 0.24);
`;

export const ShopDetailMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopDetailMetaCard = styled.div`
  padding: 16px 18px;
  border-radius: 20px;
  border: 1px solid #e6ebf7;
  background: #f8faff;
`;

export const ShopDetailMetaLabel = styled.div`
  color: #7081a8;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`;

export const ShopDetailMetaValue = styled.div`
  color: #0e1731;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.45;
`;

export const ShopDetailBodyGrid = styled.section`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 32px;
  margin-bottom: 44px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopDetailTabRail = styled.div`
  display: grid;
  gap: 12px;
  align-content: start;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ShopDetailTabButton = styled.button<{ $active?: boolean }>`
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${({ $active }) => ($active ? "#335cff" : "#e4eaf8")};
  background: ${({ $active }) => ($active ? "#eef2ff" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1630ad" : "#546481")};
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
`;

export const ShopDetailContent = styled.div`
  display: grid;
  gap: 34px;
`;

export const ShopDetailSection = styled.section`
  display: grid;
  gap: 16px;
`;

export const ShopDetailSectionTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  color: #0b1436;
`;

export const ShopDetailParagraph = styled.p`
  margin: 0;
  color: #546481;
  font-size: 15px;
  line-height: 1.75;
`;

export const ShopDetailHighlightList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopDetailHighlight = styled.div`
  padding: 16px 18px;
  border-radius: 18px;
  background: #f6f8fc;
  border: 1px solid #e8edf8;
  color: #0e1731;
  font-weight: 600;
`;

export const ShopSpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopSpecCard = styled.div`
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid #e6ebf7;
  background: #ffffff;
`;

export const ShopSpecLabel = styled.div`
  color: #7081a8;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`;

export const ShopSpecValue = styled.div`
  color: #0e1731;
  font-weight: 700;
  line-height: 1.5;
`;

export const ShopReviewList = styled.div`
  display: grid;
  gap: 18px;
`;

export const ShopReviewCard = styled.article`
  padding: 20px 22px;
  border-radius: 22px;
  border: 1px solid #e6ebf7;
  background: #ffffff;
`;

export const ShopReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

export const ShopReviewAuthor = styled.div`
  color: #0e1731;
  font-weight: 700;
`;

export const ShopReviewMeta = styled.div`
  color: #6f7d9e;
  font-size: 13px;
`;

export const ShopReviewTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  color: #0b1436;
`;

export const ShopReviewBody = styled.p`
  margin: 0;
  color: #546481;
  line-height: 1.7;
  font-size: 15px;
`;

export const ShopReviewForm = styled.form`
  display: grid;
  gap: 16px;
  padding: 22px;
  border-radius: 24px;
  border: 1px solid #e6ebf7;
  background: #f8faff;
`;

export const ShopReviewFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ShopReviewInput = styled.input`
  width: 100%;
  padding: 13px 14px;
  border-radius: 14px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopReviewSelect = styled.select`
  width: 100%;
  padding: 13px 14px;
  border-radius: 14px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopReviewTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: vertical;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #dce4fb;
  background: #ffffff;
  color: #0e1731;
  font: inherit;
  outline: none;
`;

export const ShopReviewSubmit = styled.button`
  width: fit-content;
  padding: 13px 18px;
  border: 0;
  border-radius: 999px;
  background: #0b1436;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const ShopRelatedSection = styled.section`
  display: grid;
  gap: 22px;
`;

export const ShopRelatedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  flex-wrap: wrap;
`;
