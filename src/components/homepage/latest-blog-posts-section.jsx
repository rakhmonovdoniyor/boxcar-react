import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import {
  BlogCard,
  BlogCardLink,
  BlogCardBody,
  BlogGrid,
  BlogImage,
  BlogMeta,
  BlogPill,
  BlogTitle,
  CardLinkButton,
  SectionCopy,
  SectionHeader,
  SectionTitle,
  SectionTitleGroup,
} from "../../style/homepagestyle/homestyle";

const LatestBlogPostsSection = ({ posts }) => {
  return (
    <section>
      <SectionHeader>
        <SectionTitleGroup>
          <SectionTitle>Latest Blog Posts</SectionTitle>
          <SectionCopy>
            Content cards aligned with the final editorial strip in the Figma
            page.
          </SectionCopy>
        </SectionTitleGroup>
      </SectionHeader>

      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post.title}>
            <BlogCardLink as={Link} to={`/blog/${post.slug ?? ""}`}>
              <BlogImage alt={post.title} src={post.image} />
            </BlogCardLink>
            <BlogCardBody>
              <BlogPill>{post.tag}</BlogPill>
              <BlogMeta>
                {post.author} / {post.date}
              </BlogMeta>
              <BlogCardLink as={Link} to={`/blog/${post.slug ?? ""}`}>
                <BlogTitle>{post.title}</BlogTitle>
              </BlogCardLink>
              <CardLinkButton as={Link} to={`/blog/${post.slug ?? ""}`} type="button">
                Read Article
                <ArrowForwardRoundedIcon fontSize="small" />
              </CardLinkButton>
            </BlogCardBody>
          </BlogCard>
        ))}
      </BlogGrid>
    </section>
  );
};

export default LatestBlogPostsSection;
