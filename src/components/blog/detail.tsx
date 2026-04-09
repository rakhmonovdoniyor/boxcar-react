import React, { useMemo, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Link, Navigate, useParams } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../../data/blogData";
import BlogCardView from "./card";
import BlogVariantSwitcher from "./variant-switcher";
import {
  BlogAuthorAvatar,
  BlogAuthorBody,
  BlogAuthorCard,
  BlogAuthorName,
  BlogAuthorRole,
  BlogBreadcrumbCurrent,
  BlogBreadcrumbLink,
  BlogBreadcrumbs,
  BlogChecklist,
  BlogChecklistCard,
  BlogChecklistGrid,
  BlogChecklistItem,
  BlogChecklistTitle,
  BlogCopy,
  BlogDetailImage,
  BlogDetailParagraph,
  BlogDetailSection,
  BlogDetailSectionTitle,
  BlogDetailShell,
  BlogDetailTitle,
  BlogField,
  BlogFieldGrid,
  BlogFormNote,
  BlogHeroShell,
  BlogMain,
  BlogMetaRow,
  BlogPageShell,
  BlogPager,
  BlogPagerCard,
  BlogPagerLabel,
  BlogPagerTitle,
  BlogQuoteCard,
  BlogRelatedGrid,
  BlogRelatedSection,
  BlogReplyForm,
  BlogReplySuccess,
  BlogReviewAction,
  BlogReviewActions,
  BlogReviewCard,
  BlogReviewHeader,
  BlogReviewIdentity,
  BlogReviewInitials,
  BlogReviewMedia,
  BlogReviewMeta,
  BlogReviewName,
  BlogReviews,
  BlogReviewThumb,
  BlogSecondaryImage,
  BlogShareSection,
  BlogSocialButton,
  BlogSocialLabel,
  BlogSocialRow,
  BlogStars,
  BlogSubmitButton,
  BlogSurface,
  BlogTag,
  BlogTagRow,
  BlogTitle,
} from "../../style/blog/blogStyle";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [replySent, setReplySent] = useState(false);

  const post = useMemo(() => (slug ? getBlogPostBySlug(slug) : null), [slug]);
  const relatedPosts = useMemo(
    () => (slug ? getRelatedBlogPosts(slug, 3) : []),
    [slug]
  );

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Blog"
          ? { ...linkItem, path: "/blog" }
          : linkItem
      ),
    []
  );

  const adjacentPosts = useMemo(() => {
    const currentIndex = blogPosts.findIndex((postItem) => postItem.slug === slug);

    if (currentIndex === -1) {
      return {
        previousPost: null,
        nextPost: null,
      };
    }

    return {
      previousPost: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
      nextPost:
        currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
    };
  }, [slug]);

  const learnItems = useMemo(() => {
    if (!post) {
      return [];
    }

    return [
      `Understand the practical trade-off behind ${post.tags[0]?.toLowerCase() ?? "ownership"} decisions.`,
      `Spot the strongest buying signal inside ${post.category.toLowerCase()} listings faster.`,
      `Use clean comparisons instead of relying on badge familiarity alone.`,
      `Turn broad market commentary into clearer next actions for the buyer.`,
    ];
  }, [post]);

  const requirementItems = useMemo(() => {
    if (!post) {
      return [];
    }

    return [
      "A realistic budget and a clear use case for the car you are considering.",
      "Enough ownership context to compare maintenance, efficiency, and resale risk.",
      `A quick review of the article tags: ${post.tags.join(", ")}.`,
      "A willingness to compare practical value instead of decorative specifications.",
    ];
  }, [post]);

  const reviewMedia = useMemo(() => {
    if (!post) {
      return [];
    }

    return [post.image, ...relatedPosts.map((relatedPost) => relatedPost.image)].slice(0, 3);
  }, [post, relatedPosts]);

  const reviewCards = useMemo(() => {
    if (!post) {
      return [];
    }

    return [
      {
        initials: "A.T",
        name: "Ali Tufan",
        meta: "April 2023",
        copy:
          "Clear breakdown, strong examples, and no wasted space. This is the kind of article that actually helps narrow a buying decision.",
        media: reviewMedia,
      },
      {
        initials: "B.S",
        name: "Brooklyn Simmons",
        meta: "April 2023",
        copy:
          "The practical angle is what works here. It explains the ownership logic instead of repeating marketing language.",
        media: [],
      },
    ];
  }, [post, reviewMedia]);

  const handleReplySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReplySent(true);
  };

  if (!post) {
    return <Navigate replace to="/blog" />;
  }

  const authorInitials = post.author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <BlogPageShell>
      <BlogHeroShell>
        <SiteHeader navLinks={pageNavLinks} searchPlaceholder="Search articles or guides" />
      </BlogHeroShell>

      <BlogMain>
        <BlogSurface>
          <BlogBreadcrumbs>
            <BlogBreadcrumbLink as={Link} to="/">
              Home
            </BlogBreadcrumbLink>
            <span>/</span>
            <BlogBreadcrumbCurrent>Cars for Sale</BlogBreadcrumbCurrent>
          </BlogBreadcrumbs>

          <BlogDetailShell>
            <div style={{ display: "grid", gap: "16px" }}>
              <BlogVariantSwitcher active="single" singlePath={`/blog/${post.slug}`} />
              <BlogDetailTitle>{post.title}</BlogDetailTitle>
              <BlogMetaRow>
                <span>{post.author}</span>
                <span>{post.category}</span>
                <span>{post.date}</span>
              </BlogMetaRow>
            </div>

            <BlogDetailImage alt={post.title} src={post.image} />

            <BlogDetailSection>
              <BlogDetailSectionTitle>Bringing practical car-buying context to the page</BlogDetailSectionTitle>
              <BlogDetailParagraph>{post.excerpt}</BlogDetailParagraph>
              {post.content.map((paragraph) => (
                <BlogDetailParagraph key={paragraph}>{paragraph}</BlogDetailParagraph>
              ))}
            </BlogDetailSection>

            <BlogQuoteCard>
              “{post.content[1] ?? post.excerpt}”
              <footer>{post.author}</footer>
            </BlogQuoteCard>

            <BlogChecklistGrid>
              <BlogChecklistCard>
                <BlogChecklistTitle>What you'll learn</BlogChecklistTitle>
                <BlogChecklist>
                  {learnItems.map((item) => (
                    <BlogChecklistItem key={item}>
                      <CheckRoundedIcon fontSize="small" />
                      <span>{item}</span>
                    </BlogChecklistItem>
                  ))}
                </BlogChecklist>
              </BlogChecklistCard>

              <BlogChecklistCard>
                <BlogChecklistTitle>Requirements</BlogChecklistTitle>
                <BlogChecklist>
                  {requirementItems.map((item) => (
                    <BlogChecklistItem key={item}>
                      <CheckRoundedIcon fontSize="small" />
                      <span>{item}</span>
                    </BlogChecklistItem>
                  ))}
                </BlogChecklist>
              </BlogChecklistCard>
            </BlogChecklistGrid>

            <BlogSecondaryImage
              alt={`${post.title} secondary visual`}
              src={relatedPosts[0]?.image ?? post.image}
            />

            <BlogShareSection>
              <BlogSocialRow>
                <BlogSocialLabel>Share this post</BlogSocialLabel>
                <BlogSocialButton as={Link} to="#">
                  <FacebookRoundedIcon fontSize="small" />
                </BlogSocialButton>
                <BlogSocialButton as={Link} to="#">
                  <InstagramIcon fontSize="small" />
                </BlogSocialButton>
                <BlogSocialButton as={Link} to="#">
                  <LinkedInIcon fontSize="small" />
                </BlogSocialButton>
                <BlogSocialButton as={Link} to="#">
                  <LanguageRoundedIcon fontSize="small" />
                </BlogSocialButton>
              </BlogSocialRow>

              <BlogTagRow>
                {post.tags.map((tag) => (
                  <BlogTag key={tag}>{tag}</BlogTag>
                ))}
              </BlogTagRow>
            </BlogShareSection>

            <BlogAuthorCard>
              <BlogAuthorAvatar>{authorInitials}</BlogAuthorAvatar>
              <BlogAuthorBody>
                <BlogAuthorName>{post.author}</BlogAuthorName>
                <BlogAuthorRole>Editorial Writer</BlogAuthorRole>
                <BlogCopy>
                  Clear, high-signal coverage focused on pricing logic, ownership trade-offs,
                  and cleaner digital buying journeys for modern car shoppers.
                </BlogCopy>
              </BlogAuthorBody>
            </BlogAuthorCard>

            {(adjacentPosts.previousPost || adjacentPosts.nextPost) && (
              <BlogPager>
                {adjacentPosts.previousPost ? (
                  <BlogPagerCard as={Link} to={`/blog/${adjacentPosts.previousPost.slug}`}>
                    <BlogPagerLabel>
                      <ArrowBackRoundedIcon fontSize="small" /> Previous Post
                    </BlogPagerLabel>
                    <BlogPagerTitle>{adjacentPosts.previousPost.title}</BlogPagerTitle>
                  </BlogPagerCard>
                ) : (
                  <div />
                )}

                {adjacentPosts.nextPost ? (
                  <BlogPagerCard as={Link} to={`/blog/${adjacentPosts.nextPost.slug}`}>
                    <BlogPagerLabel>
                      Next Post <ArrowForwardRoundedIcon fontSize="small" />
                    </BlogPagerLabel>
                    <BlogPagerTitle>{adjacentPosts.nextPost.title}</BlogPagerTitle>
                  </BlogPagerCard>
                ) : (
                  <div />
                )}
              </BlogPager>
            )}

            <BlogReviews>
              <div style={{ display: "grid", gap: "8px" }}>
                <BlogDetailSectionTitle>Customer Reviews</BlogDetailSectionTitle>
                <BlogCopy>
                  Feedback around the article structure, clarity, and practical usefulness.
                </BlogCopy>
              </div>

              {reviewCards.map((reviewCard) => (
                <BlogReviewCard key={`${reviewCard.name}-${reviewCard.meta}`}>
                  <BlogReviewHeader>
                    <BlogReviewIdentity>
                      <BlogReviewInitials>{reviewCard.initials}</BlogReviewInitials>
                      <div style={{ display: "grid", gap: "4px" }}>
                        <BlogReviewName>{reviewCard.name}</BlogReviewName>
                        <BlogReviewMeta>{reviewCard.meta}</BlogReviewMeta>
                      </div>
                    </BlogReviewIdentity>

                    <BlogStars>
                      {Array.from({ length: 5 }, (_, index) => (
                        <StarRoundedIcon key={index} fontSize="small" />
                      ))}
                    </BlogStars>
                  </BlogReviewHeader>

                  <BlogDetailParagraph>{reviewCard.copy}</BlogDetailParagraph>

                  {reviewCard.media.length ? (
                    <BlogReviewMedia>
                      {reviewCard.media.map((imageItem, index) => (
                        <BlogReviewThumb
                          alt={`${reviewCard.name} media ${index + 1}`}
                          key={`${reviewCard.name}-${index}`}
                          src={imageItem}
                        />
                      ))}
                    </BlogReviewMedia>
                  ) : null}

                  <BlogReviewActions>
                    <BlogReviewAction type="button">
                      <ThumbUpAltOutlinedIcon fontSize="small" />
                      Helpful
                    </BlogReviewAction>
                    <BlogReviewAction type="button">
                      <ThumbDownAltOutlinedIcon fontSize="small" />
                      Not Helpful
                    </BlogReviewAction>
                  </BlogReviewActions>
                </BlogReviewCard>
              ))}
            </BlogReviews>

            <BlogDetailSection>
              <div style={{ display: "grid", gap: "8px" }}>
                <BlogDetailSectionTitle>Leave a Reply</BlogDetailSectionTitle>
                <BlogFormNote>
                  Your email address will not be published. Required fields are marked.
                </BlogFormNote>
              </div>

              <BlogReplyForm onSubmit={handleReplySubmit}>
                <BlogFieldGrid>
                  <BlogField>
                    <span>Name</span>
                    <input name="name" placeholder="Ali Tufan" type="text" />
                  </BlogField>

                  <BlogField>
                    <span>Email</span>
                    <input
                      name="email"
                      placeholder="creativelayers088@gmail.com"
                      type="email"
                    />
                  </BlogField>
                </BlogFieldGrid>

                <BlogField>
                  <span>Title</span>
                  <input name="title" placeholder="Good Cars" type="text" />
                </BlogField>

                <BlogField>
                  <span>Comment</span>
                  <textarea
                    name="message"
                    placeholder="Lorem ipsum dolor sit amet"
                    required
                  />
                </BlogField>

                <div style={{ display: "grid", gap: "12px", justifyItems: "start" }}>
                  <BlogSubmitButton type="submit">
                    Post Comment
                    <SendRoundedIcon fontSize="small" />
                  </BlogSubmitButton>

                  {replySent ? (
                    <BlogReplySuccess>
                      Your reply has been captured locally for this demo state.
                    </BlogReplySuccess>
                  ) : null}
                </div>
              </BlogReplyForm>
            </BlogDetailSection>

            <BlogRelatedSection>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                  alignItems: "end",
                }}
              >
                <div>
                  <BlogTitle style={{ fontSize: "32px" }}>Latest Blog Posts</BlogTitle>
                  <BlogCopy>More articles from the same buying and ownership theme.</BlogCopy>
                </div>

                <BlogBreadcrumbLink as={Link} to="/blog">
                  <ArrowBackRoundedIcon fontSize="small" /> Back to list
                </BlogBreadcrumbLink>
              </div>

              <BlogRelatedGrid>
                {relatedPosts.map((relatedPost) => (
                  <BlogCardView key={relatedPost.slug} post={relatedPost} />
                ))}
              </BlogRelatedGrid>
            </BlogRelatedSection>
          </BlogDetailShell>
        </BlogSurface>
      </BlogMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </BlogPageShell>
  );
};

export default BlogDetailPage;
