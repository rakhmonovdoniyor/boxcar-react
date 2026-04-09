import React, { useMemo, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { blogPosts } from "../../data/blogData";
import {
  BlogBreadcrumbCurrent,
  BlogBreadcrumbLink,
  BlogBreadcrumbs,
  BlogCategoryTab,
  BlogCategoryTabs,
  BlogEmptyState,
  BlogGrid,
  BlogHeader,
  BlogHeroShell,
  BlogMain,
  BlogPageButton,
  BlogPageShell,
  BlogPagination,
  BlogResultCopy,
  BlogSurface,
  BlogTitle,
} from "../../style/blog/blogStyle";
import BlogCardView from "./card";
import BlogVariantSwitcher from "./variant-switcher";

const PAGE_SIZE = 9;
const BLOG_LIST_TABS = ["Auto Detailing", "Car News", "Buying Guides"] as const;
type BlogListTab = (typeof BLOG_LIST_TABS)[number];

const BlogListPage = () => {
  const [activeCategory, setActiveCategory] = useState<BlogListTab>("Auto Detailing");
  const [currentPage, setCurrentPage] = useState(1);

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Blog"
          ? { ...linkItem, path: "/blog" }
          : linkItem
      ),
    []
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Auto Detailing") {
      return blogPosts;
    }

    if (activeCategory === "Car News") {
      return blogPosts.filter((post) => post.category === "Car News");
    }

    return blogPosts.filter(
      (post) => post.category === "Buying Guides" || post.category === "Insurance Advice"
    );
  }, [activeCategory]);

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));

  const pagedPosts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredPosts.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredPosts]);

  const handleCategoryChange = (category: BlogListTab) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

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

          <BlogHeader>
            <BlogTitle>Blog List</BlogTitle>
            <BlogVariantSwitcher active="list-01" />
          </BlogHeader>

          <BlogCategoryTabs>
            {BLOG_LIST_TABS.map((category) => (
              <BlogCategoryTab
                key={category}
                onClick={() => handleCategoryChange(category)}
                type="button"
                $active={activeCategory === category}
              >
                {category}
              </BlogCategoryTab>
            ))}
          </BlogCategoryTabs>

          {pagedPosts.length ? (
            <>
              <BlogGrid>
                {pagedPosts.map((post) => (
                  <BlogCardView key={post.slug} post={post} />
                ))}
              </BlogGrid>

              <BlogPagination>
                <BlogPageButton
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  type="button"
                  $wide
                >
                  <ArrowBackRoundedIcon fontSize="small" />
                </BlogPageButton>

                {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                  <BlogPageButton
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                    $active={currentPage === page}
                  >
                    {page}
                  </BlogPageButton>
                ))}

                <BlogPageButton
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                  type="button"
                  $wide
                >
                  <ArrowForwardRoundedIcon fontSize="small" />
                </BlogPageButton>
              </BlogPagination>

              <BlogResultCopy>
                Showing results {(currentPage - 1) * PAGE_SIZE + 1}-
                {Math.min(currentPage * PAGE_SIZE, filteredPosts.length)} of{" "}
                {filteredPosts.length}
              </BlogResultCopy>
            </>
          ) : (
            <BlogEmptyState>
              <h3>No articles matched this category</h3>
              <p>Switch the topic tabs above to bring more posts back into the list.</p>
            </BlogEmptyState>
          )}
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

export default BlogListPage;
