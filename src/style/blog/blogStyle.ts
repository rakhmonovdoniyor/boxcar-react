import styled from "styled-components";

export const BlogPageShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(61, 88, 198, 0.12), transparent 32%),
    #050b1f;
  color: #0f1735;
`;

export const BlogHeroShell = styled.div`
  padding: 28px 48px 0;

  @media (max-width: 1024px) {
    padding: 24px 24px 0;
  }
`;

export const BlogMain = styled.main`
  padding: 0 48px 48px;

  @media (max-width: 1024px) {
    padding: 0 24px 32px;
  }
`;

export const BlogSurface = styled.section`
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

export const BlogBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7081a8;
  font-size: 13px;
  margin-bottom: 18px;
`;

export const BlogBreadcrumbLink = styled.a`
  color: #335cff;
  text-decoration: none;
`;

export const BlogBreadcrumbCurrent = styled.span`
  color: #97a1bd;
`;

export const BlogHeader = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 28px;
`;

export const BlogVariantNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BlogVariantLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  text-decoration: none;
  border: 1px solid ${({ $active }) => ($active ? "#405ff2" : "#d9e0f2")};
  background: ${({ $active }) => ($active ? "#eef2ff" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1630ad" : "#050b20")};
  font-size: 14px;
  font-weight: 600;
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

export const BlogTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #0b1436;
`;

export const BlogCopy = styled.p`
  margin: 0;
  color: #6f7d9e;
  font-size: 15px;
  line-height: 1.75;
  max-width: 620px;
`;

export const BlogCategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 34px;
  border-bottom: 1px solid #e1e1e1;

  @media (max-width: 640px) {
    gap: 18px;
  }
`;

export const BlogCategoryTab = styled.button<{ $active?: boolean }>`
  position: relative;
  padding: 0 0 12px;
  border: 0;
  background: transparent;
  color: ${({ $active }) => ($active ? "#050b20" : "#667085")};
  font: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background: ${({ $active }) => ($active ? "#405ff2" : "transparent")};
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 30px;
  row-gap: 14px;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.article`
  display: grid;
  gap: 0;
  align-content: start;
  transition: transform 0.22s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BlogCardImageWrap = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #eef2fb;
  aspect-ratio: 1.24 / 1;
  margin-bottom: 22px;
  transition: box-shadow 0.22s ease;

  ${BlogCard}:hover & {
    box-shadow: 0 18px 42px rgba(5, 11, 32, 0.12);
  }
`;

export const BlogCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const BlogBadge = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #ffffff;
  color: #050b20;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: lowercase;
`;

export const BlogMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  color: #667085;
  font-size: 15px;
  margin-bottom: 2px;

  span {
    position: relative;
    margin-right: 25px;
  }

  span:last-child {
    margin-right: 0;
  }

  span:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 9px;
    right: -15px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: #d4d8e4;
  }
`;

export const BlogCardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 1.35;
  font-weight: 500;
  color: #050b20;
  transition: color 0.2s ease;

  ${BlogCard}:hover & {
    color: #2342d7;
  }
`;

export const BlogReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #335cff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
`;

export const BlogPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const BlogPageButton = styled.button<{ $active?: boolean; $wide?: boolean }>`
  min-width: ${({ $wide }) => ($wide ? "60px" : "40px")};
  height: ${({ $wide }) => ($wide ? "40px" : "40px")};
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "#050b20" : "#e1e1e1")};
  background: ${({ $active }) => ($active ? "#050b20" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#050b20")};
  font: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

export const BlogResultCopy = styled.p`
  margin: 19px 0 0;
  text-align: center;
  color: #667085;
  font-size: 14px;
`;

export const BlogEmptyState = styled.div`
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

export const BlogDetailShell = styled.section`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  gap: 28px;
`;

export const BlogDetailImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 28px;
  aspect-ratio: 1.75 / 1;
  object-fit: cover;
`;

export const BlogDetailTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #0b1436;
`;

export const BlogDetailParagraph = styled.p`
  margin: 0;
  color: #556481;
  font-size: 16px;
  line-height: 1.85;
`;

export const BlogTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BlogTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: #eef2ff;
  color: #335cff;
  font-size: 13px;
  font-weight: 700;
`;

export const BlogRelatedSection = styled.section`
  display: grid;
  gap: 22px;
  margin-top: 10px;
`;

export const BlogContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 34px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPrimaryColumn = styled.div`
  min-width: 0;
`;

export const BlogSidebarColumn = styled.aside`
  min-width: 0;
`;

export const BlogRowList = styled.div`
  display: grid;
  gap: 34px;
`;

export const BlogRowCard = styled.article<{ $variant?: "list-02" | "list-03" }>`
  display: grid;
  grid-template-columns: 400px minmax(0, 1fr);
  gap: 34px;
  align-items: center;
  transition: transform 0.22s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1280px) {
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 24px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogRowCardMedia = styled.a<{ $variant?: "list-02" | "list-03" }>`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: ${({ $variant }) => ($variant === "list-03" ? "14px" : "12px")};
  aspect-ratio: ${({ $variant }) => ($variant === "list-03" ? "1.12 / 1" : "1 / 1")};
  background: #eef2fb;
  transition: box-shadow 0.22s ease;

  ${BlogRowCard}:hover & {
    box-shadow: 0 18px 42px rgba(5, 11, 32, 0.12);
  }
`;

export const BlogRowCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const BlogRowCardBody = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
`;

export const BlogRowCardTitle = styled.h2<{ $variant?: "list-02" | "list-03" }>`
  margin: 0;
  font-size: ${({ $variant }) => ($variant === "list-03" ? "2rem" : "1.875rem")};
  line-height: 1.35;
  font-weight: 500;
  color: #050b20;
  transition: color 0.2s ease;

  ${BlogRowCard}:hover & {
    color: #2342d7;
  }
`;

export const BlogRowCardText = styled.p<{ $variant?: "list-02" | "list-03" }>`
  margin: 0;
  color: #667085;
  font-size: 15px;
  line-height: ${({ $variant }) => ($variant === "list-03" ? "1.8" : "1.72")};
  max-width: 610px;
`;

export const BlogRowReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #050b20;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  margin-top: 2px;
`;

export const BlogSidebarStack = styled.div`
  display: grid;
  gap: 22px;
`;

export const BlogSidebarCard = styled.section`
  border: 1px solid #e9ecf5;
  border-radius: 24px;
  padding: 22px 22px 24px;
  background: #ffffff;
  transition: box-shadow 0.22s ease, border-color 0.22s ease;

  &:hover {
    border-color: #d6deeb;
    box-shadow: 0 16px 36px rgba(5, 11, 32, 0.07);
  }
`;

export const BlogSidebarHeading = styled.h3`
  margin: 0 0 16px;
  font-size: 20px;
  line-height: 1.3;
  color: #050b20;
`;

export const BlogSidebarLinks = styled.div`
  display: grid;
  gap: 14px;
`;

export const BlogSidebarLink = styled.a`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #667085;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s ease;

  &:hover {
    color: #2342d7;
  }

  span:last-child {
    color: #050b20;
  }
`;

export const BlogRecentPosts = styled.div`
  display: grid;
  gap: 16px;
`;

export const BlogRecentPost = styled.a`
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(3px);
  }
`;

export const BlogRecentPostImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 12px;
  object-fit: cover;
`;

export const BlogRecentPostContent = styled.div`
  display: grid;
  gap: 8px;
`;

export const BlogRecentPostTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: #050b20;
  transition: color 0.2s ease;

  ${BlogRecentPost}:hover & {
    color: #2342d7;
  }
`;

export const BlogRecentPostMeta = styled.span`
  color: #667085;
  font-size: 13px;
`;

export const BlogSidebarTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BlogSidebarTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: #f6f8fc;
  color: #050b20;
  font-size: 14px;
  font-weight: 500;
`;

export const BlogDetailSection = styled.section`
  display: grid;
  gap: 18px;
`;

export const BlogDetailSectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.25;
  color: #050b20;
`;

export const BlogQuoteCard = styled.blockquote`
  margin: 0;
  padding: 32px 36px;
  border-radius: 28px;
  background: #f6f8fc;
  color: #050b20;
  font-size: 20px;
  line-height: 1.7;
  font-weight: 500;

  footer {
    margin-top: 16px;
    color: #667085;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const BlogChecklistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogChecklistCard = styled.div`
  border: 1px solid #e9ecf5;
  border-radius: 24px;
  padding: 24px;
  display: grid;
  gap: 14px;
`;

export const BlogChecklistTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
  color: #050b20;
`;

export const BlogChecklist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
`;

export const BlogChecklistItem = styled.li`
  display: flex;
  gap: 10px;
  color: #556481;
  font-size: 15px;
  line-height: 1.7;
`;

export const BlogSecondaryImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 24px;
  aspect-ratio: 1.8 / 1;
  object-fit: cover;
`;

export const BlogShareSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #e9ecf5;
  border-bottom: 1px solid #e9ecf5;
  padding: 22px 0;
`;

export const BlogSocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const BlogSocialLabel = styled.span`
  color: #050b20;
  font-size: 15px;
  font-weight: 600;
  margin-right: 2px;
`;

export const BlogSocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fc;
  color: #050b20;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #eef2ff;
    color: #2342d7;
  }
`;

export const BlogAuthorCard = styled.section`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 18px;
  padding: 24px;
  border-radius: 28px;
  background: #f6f8fc;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogAuthorAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background: #405ff2;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;

export const BlogAuthorBody = styled.div`
  display: grid;
  gap: 8px;
`;

export const BlogAuthorName = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  color: #050b20;
`;

export const BlogAuthorRole = styled.span`
  color: #667085;
  font-size: 14px;
`;

export const BlogPager = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPagerCard = styled.a`
  display: grid;
  gap: 8px;
  padding: 20px 22px;
  border: 1px solid #e9ecf5;
  border-radius: 24px;
  text-decoration: none;
  color: #050b20;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #d6deeb;
    box-shadow: 0 16px 36px rgba(5, 11, 32, 0.07);
  }
`;

export const BlogPagerLabel = styled.span`
  color: #667085;
  font-size: 14px;
  font-weight: 600;
`;

export const BlogPagerTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 1.45;
  color: #050b20;
`;

export const BlogReviews = styled.section`
  display: grid;
  gap: 18px;
`;

export const BlogReviewCard = styled.article`
  border: 1px solid #e9ecf5;
  border-radius: 28px;
  padding: 24px;
  display: grid;
  gap: 16px;
`;

export const BlogReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  align-items: start;
`;

export const BlogReviewIdentity = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const BlogReviewInitials = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: #eef2ff;
  color: #1630ad;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;

export const BlogReviewName = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  color: #050b20;
`;

export const BlogReviewMeta = styled.span`
  color: #667085;
  font-size: 14px;
`;

export const BlogStars = styled.div`
  display: flex;
  gap: 4px;
  color: #f59e0b;
`;

export const BlogReviewMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BlogReviewThumb = styled.img`
  width: 96px;
  height: 72px;
  border-radius: 14px;
  object-fit: cover;
`;

export const BlogReviewActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BlogReviewAction = styled.button`
  border: 0;
  background: #f6f8fc;
  color: #050b20;
  border-radius: 999px;
  min-height: 40px;
  padding: 0 16px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #eef2ff;
    color: #2342d7;
  }
`;

export const BlogReplyForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const BlogFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogField = styled.label`
  display: grid;
  gap: 8px;
  color: #050b20;
  font-size: 14px;
  font-weight: 600;

  input,
  textarea {
    width: 100%;
    border: 1px solid #d9e0f2;
    border-radius: 18px;
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
  }

  textarea {
    min-height: 160px;
    resize: vertical;
  }
`;

export const BlogFormNote = styled.p`
  margin: 0;
  color: #667085;
  font-size: 14px;
`;

export const BlogSubmitButton = styled.button`
  width: fit-content;
  min-height: 48px;
  padding: 0 22px;
  border: 0;
  border-radius: 16px;
  background: #405ff2;
  color: #ffffff;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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

export const BlogReplySuccess = styled.p`
  margin: 0;
  color: #0f8a46;
  font-size: 14px;
  font-weight: 600;
`;

export const BlogRelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
