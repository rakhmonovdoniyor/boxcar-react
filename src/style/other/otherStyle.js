import styled from "styled-components";
import { Link } from "react-router-dom";

export const OtherPageShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(61, 88, 198, 0.12), transparent 32%),
    #050b1f;
  color: #0f1735;
`;

export const OtherHeroShell = styled.div`
  padding: 28px 48px 0;

  @media (max-width: 1024px) {
    padding: 24px 24px 0;
  }
`;

export const OtherMain = styled.main`
  padding: 0 48px 48px;

  @media (max-width: 1024px) {
    padding: 0 24px 32px;
  }
`;

export const OtherSurface = styled.section`
  max-width: 1480px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 54px;
  padding: 34px 50px 48px;
  box-shadow: 0 30px 80px rgba(6, 14, 40, 0.24);

  @media (max-width: 900px) {
    padding: 24px 18px 30px;
    border-radius: 30px;
  }
`;

export const OtherBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7081a8;
  font-size: 13px;
  margin-bottom: 18px;
`;

export const OtherBreadcrumbLink = styled(Link)`
  color: #335cff;
  text-decoration: none;
`;

export const OtherBreadcrumbCurrent = styled.span`
  color: #97a1bd;
`;

export const OtherHeroGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 28px;
  align-items: stretch;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

export const OtherHeroBody = styled.div`
  display: grid;
  gap: 18px;
  align-content: start;
`;

export const OtherHeroTitle = styled.h1`
  margin: 0;
  color: #050b20;
  font-size: clamp(2.2rem, 5vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  max-width: 880px;
`;

export const OtherHeroCopy = styled.p`
  margin: 0;
  color: #667085;
  font-size: 16px;
  line-height: 1.85;
  max-width: 760px;
`;

export const OtherHeroStack = styled.div`
  display: grid;
  gap: 14px;
`;

export const OtherActionRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const actionButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 16px;
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const OtherPrimaryAction = styled(Link)`
  ${actionButton}
  border: 0;
  background: #405ff2;
  color: #ffffff;

  &:hover {
    background: #2f4ce1;
    box-shadow: 0 14px 30px rgba(64, 95, 242, 0.22);
  }
`;

export const OtherSecondaryAction = styled(Link)`
  ${actionButton}
  border: 1px solid #d9e0f2;
  background: #ffffff;
  color: #050b20;

  &:hover {
    border-color: #c8d4ea;
    box-shadow: 0 12px 24px rgba(5, 11, 32, 0.08);
  }
`;

export const OtherStatCard = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 28px;
  border-radius: 30px;
  background:
    radial-gradient(circle at top left, rgba(64, 95, 242, 0.16), transparent 42%),
    linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%);
  border: 1px solid #e1e7f2;
`;

export const OtherStatValue = styled.div`
  color: #050b20;
  font-size: clamp(2.6rem, 4vw, 4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
`;

export const OtherStatLabel = styled.div`
  color: #667085;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const OtherHeroArtwork = styled.div`
  min-height: 420px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 22% 24%, rgba(64, 95, 242, 0.16), transparent 28%),
    linear-gradient(140deg, rgba(5, 11, 32, 0.06) 12%, transparent 12% 58%, rgba(5, 11, 32, 0.06) 58%),
    linear-gradient(180deg, #eef3fb 0%, #dfe8f8 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 26px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.55);
  }

  &::after {
    content: "";
    position: absolute;
    right: -30px;
    bottom: -30px;
    width: 240px;
    height: 240px;
    border-radius: 999px;
    background: rgba(64, 95, 242, 0.12);
  }
`;

export const OtherSection = styled.section`
  display: grid;
  gap: 20px;
  margin-top: 48px;
`;

export const OtherSectionHeader = styled.div`
  display: grid;
  gap: 8px;
  max-width: 760px;
`;

export const OtherSectionKicker = styled.div`
  color: #405ff2;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const OtherSectionTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

export const OtherSectionCopy = styled.p`
  margin: 0;
  color: #667085;
  font-size: 15px;
  line-height: 1.8;
`;

export const OtherCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const OtherFeatureCard = styled.article`
  display: grid;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid #e1e7f2;
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

export const OtherFeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(64, 95, 242, 0.12);
  color: #405ff2;
`;

export const OtherFeatureTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 22px;
  line-height: 1.28;
`;

export const OtherFeatureCopy = styled.p`
  margin: 0;
  color: #667085;
  font-size: 15px;
  line-height: 1.75;
`;

export const OtherSplitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const OtherPanel = styled.section`
  display: grid;
  gap: 16px;
  padding: 26px;
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #e1e7f2;
`;

export const OtherPanelTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
  line-height: 1.25;
`;

export const OtherList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
`;

export const OtherListItem = styled.li`
  display: flex;
  gap: 10px;
  color: #556481;
  font-size: 15px;
  line-height: 1.75;

  svg {
    color: #405ff2;
    flex: 0 0 auto;
    margin-top: 3px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
  gap: 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactFormCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #e1e7f2;
  box-shadow: 0 14px 34px rgba(5, 11, 32, 0.05);
`;

export const ContactInfoStack = styled.div`
  display: grid;
  gap: 18px;
`;

export const ContactInfoCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 24px;
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #e1e7f2;
`;

export const ContactInfoTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 22px;
`;

export const ContactInfoRow = styled.div`
  display: grid;
  gap: 4px;
`;

export const ContactInfoLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667085;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const ContactInfoValue = styled.span`
  color: #050b20;
  font-size: 15px;
  line-height: 1.7;
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const ContactFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactField = styled.label`
  display: grid;
  gap: 8px;
  color: #050b20;
  font-size: 14px;
  font-weight: 600;

  input,
  select,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d9e0f2;
    border-radius: 18px;
    padding: 14px 16px;
    font: inherit;
    color: #050b20;
    background: #ffffff;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #9ab0ff;
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.12);
  }

  textarea {
    min-height: 170px;
    resize: vertical;
  }
`;

export const ContactSubmitButton = styled.button`
  ${actionButton}
  width: fit-content;
  border: 0;
  background: #405ff2;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #2f4ce1;
    box-shadow: 0 14px 30px rgba(64, 95, 242, 0.22);
  }
`;

export const ContactSuccess = styled.p`
  margin: 0;
  color: #0f8a46;
  font-size: 14px;
  font-weight: 600;
`;

export const ContactMapVisual = styled.div`
  min-height: 260px;
  border-radius: 24px;
  background:
    radial-gradient(circle at 72% 38%, rgba(64, 95, 242, 0.22) 0 12%, transparent 13%),
    radial-gradient(circle at 34% 70%, rgba(64, 95, 242, 0.16) 0 10%, transparent 11%),
    linear-gradient(rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 173, 211, 0.18) 1px, transparent 1px),
    linear-gradient(135deg, #eef6ff 0%, #e4f0ff 48%, #eff5fb 48%, #f8fbff 100%);
  background-size: auto, auto, 40px 40px, 40px 40px, auto;
`;

export const ContactHoursList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ContactHoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #edf1f6;
  color: #556481;
  font-size: 15px;

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  strong {
    color: #050b20;
    font-weight: 700;
  }
`;

export const DirectoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const DirectoryCard = styled.article`
  display: grid;
  gap: 18px;
  padding: 26px;
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #e1e7f2;
  box-shadow: 0 16px 36px rgba(5, 11, 32, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #ccd7ee;
    box-shadow: 0 22px 44px rgba(5, 11, 32, 0.1);
  }
`;

export const DirectoryCardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const DirectoryAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: ${({ $accent }) => $accent || "linear-gradient(135deg, #405ff2 0%, #111827 100%)"};
  box-shadow: 0 14px 30px rgba(5, 11, 32, 0.16);
  overflow: hidden;

  img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    filter: drop-shadow(0 6px 16px rgba(5, 11, 32, 0.18));
  }
`;

export const DirectoryTitleGroup = styled.div`
  display: grid;
  gap: 6px;
  align-content: start;
`;

export const DirectoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(64, 95, 242, 0.12);
  color: #405ff2;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const DirectoryTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
  line-height: 1.15;
  letter-spacing: -0.03em;
`;

export const DirectorySubtitle = styled.p`
  margin: 0;
  color: #667085;
  font-size: 14px;
  line-height: 1.7;
`;

export const DirectoryCopy = styled.p`
  margin: 0;
  color: #556481;
  font-size: 15px;
  line-height: 1.8;
`;

export const DirectoryMetaGrid = styled.div`
  display: grid;
  gap: 10px;
`;

export const DirectoryMetaItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: #556481;
  font-size: 14px;
  line-height: 1.7;

  strong {
    color: #050b20;
    font-weight: 700;
  }

  svg {
    color: #405ff2;
    flex: 0 0 auto;
    margin-top: 3px;
  }
`;

export const DirectoryActionRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ProfileHeroCard = styled.section`
  display: grid;
  gap: 24px;
  padding: 28px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(64, 95, 242, 0.14), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
  border: 1px solid #e1e7f2;
  box-shadow: 0 18px 40px rgba(5, 11, 32, 0.07);
`;

export const ProfileHeroGrid = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileHeroAside = styled.div`
  display: grid;
  gap: 12px;
  justify-items: start;
`;

export const ProfileMetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
`;

export const ProfileMetricCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 18px 20px;
  border-radius: 22px;
  border: 1px solid #e1e7f2;
  background: #ffffff;
`;

export const ProfileMetricValue = styled.div`
  color: #050b20;
  font-size: 28px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const ProfileMetricLabel = styled.div`
  color: #667085;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ProfileContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileStack = styled.div`
  display: grid;
  gap: 20px;
  align-content: start;
`;

export const ProfileCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 26px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #e1e7f2;
  box-shadow: 0 14px 34px rgba(5, 11, 32, 0.05);
`;

export const ProfileCardTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
  line-height: 1.24;
`;

export const ProfileCardCopy = styled.p`
  margin: 0;
  color: #556481;
  font-size: 15px;
  line-height: 1.82;
`;

export const ProfileTagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProfileTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: #f3f6fc;
  border: 1px solid #e3e9f5;
  color: #050b20;
  font-size: 14px;
  font-weight: 600;
`;

export const ProfileQuote = styled.blockquote`
  margin: 0;
  padding: 20px 22px;
  border-radius: 24px;
  background: rgba(64, 95, 242, 0.06);
  color: #22304f;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 600;
  border-left: 4px solid #405ff2;
`;

export const ProfileContactList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ProfileContactItem = styled.div`
  display: grid;
  gap: 4px;

  span {
    color: #667085;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  strong {
    color: #050b20;
    font-size: 15px;
    line-height: 1.65;
  }
`;

export const ListingPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const ListingPreviewCard = styled.article`
  display: grid;
  gap: 0;
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e1e7f2;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #ccd7ee;
    box-shadow: 0 18px 38px rgba(5, 11, 32, 0.09);
  }
`;

export const ListingPreviewImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

export const ListingPreviewBody = styled.div`
  display: grid;
  gap: 12px;
  padding: 18px;
`;

export const ListingPreviewTitle = styled.h4`
  margin: 0;
  color: #050b20;
  font-size: 21px;
  line-height: 1.22;
  letter-spacing: -0.03em;
`;

export const ListingPreviewMeta = styled.p`
  margin: 0;
  color: #667085;
  font-size: 14px;
  line-height: 1.7;
`;

export const ListingPreviewPrice = styled.div`
  color: #050b20;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const ListingPreviewLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #405ff2;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #2f4ce1;
  }
`;

export const CompactProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

export const CompactProfileCard = styled.article`
  display: grid;
  gap: 14px;
  padding: 20px;
  border-radius: 24px;
  border: 1px solid #e1e7f2;
  background: #ffffff;
`;

export const CompactProfileName = styled.h4`
  margin: 0;
  color: #050b20;
  font-size: 20px;
  line-height: 1.2;
`;

export const CompactProfileRole = styled.p`
  margin: 0;
  color: #667085;
  font-size: 14px;
  line-height: 1.7;
`;

export const CompactProfileLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  color: #405ff2;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #2f4ce1;
  }
`;

export const AccordionGroup = styled.div`
  display: grid;
  gap: 14px;
`;

export const AccordionCard = styled.article`
  border: 1px solid ${({ $open }) => ($open ? "#cad6f4" : "#e1e7f2")};
  border-radius: 24px;
  background: ${({ $open }) => ($open ? "#f8fbff" : "#ffffff")};
  box-shadow: ${({ $open }) =>
    $open ? "0 18px 38px rgba(5, 11, 32, 0.08)" : "0 10px 26px rgba(5, 11, 32, 0.04)"};
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
`;

export const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  border: 0;
  background: transparent;
  color: #050b20;
  font: inherit;
  font-size: 17px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;

  svg {
    color: #405ff2;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: transform 0.2s ease;
  }
`;

export const AccordionContent = styled.div`
  padding: 0 24px 24px;
  color: #556481;
  font-size: 15px;
  line-height: 1.82;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
`;

export const PricingCard = styled.article`
  display: grid;
  gap: 20px;
  padding: 28px;
  border-radius: 30px;
  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(180deg, rgba(64, 95, 242, 0.08) 0%, #ffffff 100%)"
      : "#ffffff"};
  border: 1px solid ${({ $featured }) => ($featured ? "#b9c8ff" : "#e1e7f2")};
  box-shadow: ${({ $featured }) =>
    $featured
      ? "0 24px 50px rgba(64, 95, 242, 0.16)"
      : "0 14px 34px rgba(5, 11, 32, 0.05)"};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: auto -40px -40px auto;
    width: 150px;
    height: 150px;
    border-radius: 999px;
    background: ${({ $featured }) =>
      $featured ? "rgba(64, 95, 242, 0.08)" : "rgba(64, 95, 242, 0.04)"};
  }
`;

export const PricingTop = styled.div`
  display: grid;
  gap: 10px;
`;

export const PricingName = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 26px;
  line-height: 1.2;
`;

export const PricingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(64, 95, 242, 0.12);
  color: #405ff2;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const PricingPriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

export const PricingPrice = styled.div`
  color: #050b20;
  font-size: 52px;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
`;

export const PricingPeriod = styled.span`
  color: #667085;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PricingFeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
`;

export const PricingFeatureItem = styled.li`
  display: flex;
  gap: 10px;
  color: #556481;
  font-size: 15px;
  line-height: 1.75;

  svg {
    color: #405ff2;
    flex: 0 0 auto;
    margin-top: 3px;
  }
`;

export const UtilityGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const UtilityCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 26px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #e1e7f2;
  box-shadow: 0 14px 34px rgba(5, 11, 32, 0.05);
`;

export const UtilityCardTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 24px;
  line-height: 1.24;
`;

export const UtilityForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const UtilityFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const UtilityResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
`;

export const UtilityResultCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid #e1e7f2;
  background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
`;

export const UtilityResultLabel = styled.div`
  color: #667085;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const UtilityResultValue = styled.div`
  color: #050b20;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const CompareSelectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CompareVehicleCard = styled.article`
  display: grid;
  gap: 18px;
  padding: 22px;
  border-radius: 28px;
  border: 1px solid #e1e7f2;
  background: #ffffff;
`;

export const CompareVehicleImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 22px;
  display: block;
`;

export const CompareVehicleMeta = styled.div`
  display: grid;
  gap: 8px;
`;

export const CompareVehicleName = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 28px;
  line-height: 1.16;
  letter-spacing: -0.04em;
`;

export const CompareVehiclePrice = styled.div`
  color: #050b20;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const CompareTable = styled.div`
  display: grid;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #e1e7f2;
`;

export const CompareTableRow = styled.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) minmax(0, 1fr);
  background: ${({ $alt }) => ($alt ? "#f9fbff" : "#ffffff")};
  border-bottom: 1px solid #edf1f6;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const CompareTableLabel = styled.div`
  padding: 16px 20px;
  color: #667085;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-right: 1px solid #edf1f6;

  @media (max-width: 860px) {
    border-right: 0;
    border-bottom: 1px solid #edf1f6;
  }
`;

export const CompareTableValue = styled.div`
  padding: 16px 20px;
  color: #050b20;
  font-size: 15px;
  line-height: 1.7;
  border-right: 1px solid #edf1f6;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 860px) {
    border-right: 0;
    border-bottom: 1px solid #edf1f6;

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const NotFoundShell = styled.div`
  display: grid;
  gap: 24px;
  justify-items: start;
  padding: 46px 0 20px;
`;

export const NotFoundCode = styled.div`
  color: #405ff2;
  font-size: clamp(5rem, 12vw, 10rem);
  line-height: 0.9;
  font-weight: 800;
  letter-spacing: -0.08em;
`;
