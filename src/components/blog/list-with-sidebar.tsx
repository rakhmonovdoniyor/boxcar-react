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
import BlogSidebar from "./sidebar";
import BlogRowCardView from "./row-card";
import BlogVariantSwitcher from "./variant-switcher";
import {
  BlogBreadcrumbCurrent,
  BlogBreadcrumbLink,
  BlogBreadcrumbs,
  BlogContentLayout,
  BlogHeader,
  BlogHeroShell,
  BlogMain,
  BlogPageButton,
  BlogPageShell,
  BlogPagination,
  BlogPrimaryColumn,
  BlogResultCopy,
  BlogRowList,
  BlogSidebarColumn,
  BlogSurface,
  BlogTitle,
} from "../../style/blog/blogStyle";

const PAGE_SIZE = 3;

interface BlogListWithSidebarPageProps {
  variant: "list-02" | "list-03";
}

const BlogListWithSidebarPage = ({ variant }: BlogListWithSidebarPageProps) => {
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

  const pageCount = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
  const pagedPosts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return blogPosts.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

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
            <BlogVariantSwitcher active={variant} />
          </BlogHeader>

          <BlogContentLayout>
            <BlogPrimaryColumn>
              <BlogRowList>
                {pagedPosts.map((post) => (
                  <BlogRowCardView key={post.slug} post={post} variant={variant} />
                ))}
              </BlogRowList>

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
                {Math.min(currentPage * PAGE_SIZE, blogPosts.length)} of {blogPosts.length}
              </BlogResultCopy>
            </BlogPrimaryColumn>

            <BlogSidebarColumn>
              <BlogSidebar />
            </BlogSidebarColumn>
          </BlogContentLayout>
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

export default BlogListWithSidebarPage;
