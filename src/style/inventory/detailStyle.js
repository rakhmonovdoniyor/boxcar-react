import styled from "styled-components";

export const DetailHeroShell = styled.section`
  padding: 28px clamp(20px, 4vw, 56px) 124px;
  background: #070b1d;
`;

export const DetailMain = styled.main`
  margin-top: -54px;
  padding: 0 clamp(20px, 4vw, 56px) 0;
`;

export const DetailSurface = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: clamp(22px, 4vw, 36px);
  border-radius: 34px;
  background: #ffffff;
`;

export const DetailWideGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 16px 0 22px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailWideGalleryTile = styled.button`
  overflow: hidden;
  min-height: 220px;
  padding: 0;
  border: 0;
  border-radius: 24px;
  background: #eef3f8;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 0 2px #405ff2 inset" : "none"};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $active }) =>
      $active
        ? "0 0 0 2px #405ff2 inset, 0 18px 36px rgba(5, 11, 32, 0.12)"
        : "0 18px 36px rgba(5, 11, 32, 0.12)"};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const DetailWideTopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 28px;
  align-items: start;
  margin-bottom: 22px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailWideMain = styled.div`
  display: grid;
  gap: 18px;
`;

export const DetailMetricsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const DetailMetricCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #f8faff;
  border: 1px solid #edf1f6;
`;

export const DetailMetricValue = styled.div`
  color: #050b20;
  font-size: 16px;
  font-weight: 800;
`;

export const DetailMetricLabel = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  margin: 16px 0 24px;
  flex-wrap: wrap;
`;

export const DetailHeaderMain = styled.div`
  display: grid;
  gap: 12px;
`;

export const DetailTitle = styled.h1`
  margin: 0;
  color: #050b20;
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.12;
`;

export const DetailActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DetailGhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #dce4f0;
  border-radius: 999px;
  padding: 12px 16px;
  background: #ffffff;
  color: #050b20;
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #c8d4ea;
    box-shadow: 0 12px 24px rgba(5, 11, 32, 0.08);
  }
`;

export const DetailFactRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DetailFactPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: #f4f7fb;
  color: #526079;
  font-size: 14px;
  font-weight: 600;
`;

export const DetailTopGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: 28px;
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailMainColumn = styled.div`
  display: grid;
  gap: 28px;
`;

export const DetailSidebar = styled.aside`
  display: grid;
  gap: 18px;
  position: sticky;
  top: 24px;

  @media (max-width: 1080px) {
    position: static;
  }
`;

export const DetailGallery = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailMediaToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DetailMediaActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DetailMediaButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? "#405ff2" : "#dce4f0")};
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({ $active }) => ($active ? "#eef2ff" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#405ff2" : "#050b20")};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #405ff2;
  }
`;

export const DetailPrimaryMedia = styled.div`
  overflow: hidden;
  min-height: 420px;
  border-radius: 28px;
  background: #eef3f8;

  @media (max-width: 760px) {
    min-height: 320px;
  }
`;

export const DetailPrimaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const DetailThumbGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`;

export const DetailThumb = styled.button`
  overflow: hidden;
  padding: 0;
  border: 2px solid ${({ $active }) => ($active ? "#405ff2" : "transparent")};
  border-radius: 20px;
  background: #eef3f8;
  cursor: pointer;
  min-height: 130px;
  box-shadow: ${({ $active }) =>
    $active ? "0 16px 32px rgba(64, 95, 242, 0.18)" : "none"};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #405ff2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const DetailSpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailSpecCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 16px 18px;
  border-radius: 20px;
  background: #f8faff;
  border: 1px solid #edf1f6;
`;

export const DetailSpecIcon = styled.div`
  color: #405ff2;
  display: inline-flex;
`;

export const DetailSpecValue = styled.div`
  color: #050b20;
  font-size: 16px;
  font-weight: 800;
`;

export const DetailSpecLabel = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const DetailPriceCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 24px;
  border: 1px solid #e3e9f2;
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
  box-shadow: 0 16px 38px rgba(5, 11, 32, 0.06);
`;

export const DetailPriceLabel = styled.div`
  color: #6c768d;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const DetailPriceValue = styled.div`
  color: #050b20;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const DetailFinanceNote = styled.div`
  color: #6c768d;
  line-height: 1.7;
`;

export const DetailPriceMeta = styled.div`
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #f4f7fb;
`;

export const DetailPriceMetaLabel = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const DetailPriceMetaValue = styled.div`
  color: #050b20;
  font-size: 18px;
  font-weight: 800;
`;

const actionButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  border-radius: 18px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const DetailPrimaryButton = styled.button`
  ${actionButton}
  border: 0;
  background: #405ff2;
  color: #ffffff;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #2f4ce1;
    box-shadow: 0 14px 30px rgba(64, 95, 242, 0.22);
  }
`;

export const DetailSecondaryButton = styled.button`
  ${actionButton}
  border: 1px solid #dce4f0;
  background: #ffffff;
  color: #050b20;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #c8d4ea;
    box-shadow: 0 12px 24px rgba(5, 11, 32, 0.08);
  }
`;

export const DetailDealerCard = styled.section`
  display: grid;
  gap: 14px;
  padding: 22px;
  border: 1px solid #e3e9f2;
  border-radius: 28px;
  background: #ffffff;
`;

export const DetailDealerHeading = styled.div`
  display: grid;
  gap: 6px;
`;

export const DetailDealerName = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 22px;
`;

export const DetailDealerText = styled.div`
  color: #6c768d;
  line-height: 1.7;
`;

export const DetailAnchorTabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DetailAnchorLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: #f4f7fb;
  color: #050b20;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #eef2ff;
    color: #405ff2;
  }
`;

export const DetailUtilityCard = styled.section`
  display: grid;
  gap: 12px;
  padding: 20px 22px;
  border: 1px solid #e3e9f2;
  border-radius: 24px;
  background: #ffffff;
`;

export const DetailUtilityTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 18px;
`;

export const DetailUtilityButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  min-height: 46px;
  border: 1px solid #dce4f0;
  border-radius: 16px;
  background: ${({ $primary }) => ($primary ? "#eef2ff" : "#ffffff")};
  color: ${({ $primary }) => ($primary ? "#405ff2" : "#050b20")};
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ $primary }) => ($primary ? "#d8e0ff" : "#c8d4ea")};
    background: ${({ $primary }) => ($primary ? "#e6ecff" : "#f8fbff")};
  }
`;

export const DetailSection = styled.section`
  display: grid;
  gap: 16px;
  padding-top: 6px;
`;

export const DetailIntroCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 22px 24px;
  border: 1px solid #e3e9f2;
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
`;

export const DetailChipRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DetailChip = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === "soft" ? "#f4f7fb" : "rgba(64, 95, 242, 0.1)"};
  color: ${({ $tone }) => ($tone === "soft" ? "#526079" : "#405ff2")};
  font-size: 12px;
  font-weight: 700;
`;

export const DetailSectionTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: 26px;
  line-height: 1.2;
`;

export const DetailCopy = styled.p`
  margin: 0;
  color: #526079;
  line-height: 1.8;
`;

export const DetailOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailOverviewItem = styled.div`
  display: grid;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 20px;
  background: #f8faff;
  border: 1px solid #edf1f6;
`;

export const DetailOverviewLabel = styled.div`
  color: #6c768d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const DetailOverviewValue = styled.div`
  color: #050b20;
  font-size: 16px;
  font-weight: 700;
`;

export const DetailFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #f8faff;
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

export const DetailLocationCard = styled.div`
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid #e3e9f2;
  background: #ffffff;
`;

export const DetailMapVisual = styled.div`
  min-height: 260px;
  background:
    radial-gradient(circle at 74% 42%, rgba(64, 95, 242, 0.22) 0 12%, transparent 13%),
    radial-gradient(circle at 36% 68%, rgba(64, 95, 242, 0.16) 0 10%, transparent 11%),
    linear-gradient(rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(135deg, #eef6ff 0%, #e4f0ff 48%, #eff5fb 48%, #f8fbff 100%);
  background-size: auto, auto, 40px 40px, 40px 40px, auto;
`;

export const DetailLocationBody = styled.div`
  display: grid;
  gap: 8px;
  padding: 18px 20px;
`;

export const DetailForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const DetailFormFeedback = styled.div`
  color: #1a7f37;
  font-size: 14px;
  font-weight: 600;
`;

export const DetailFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailField = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dce4f0;
  border-radius: 16px;
  padding: 14px 16px;
  font: inherit;
  color: #050b20;
  background: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #9ab0ff;
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.12);
  }
`;

export const DetailTextarea = styled.textarea`
  width: 100%;
  min-height: 140px;
  box-sizing: border-box;
  border: 1px solid #dce4f0;
  border-radius: 16px;
  padding: 14px 16px;
  font: inherit;
  color: #050b20;
  background: #ffffff;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #9ab0ff;
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.12);
  }
`;

export const DetailRelatedSection = styled.section`
  display: grid;
  gap: 20px;
  padding-top: 14px;
`;
