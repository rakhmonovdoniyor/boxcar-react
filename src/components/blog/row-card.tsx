import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import type { BlogPost } from "../../data/blogData";
import {
  BlogBadge,
  BlogMetaRow,
  BlogRowCard,
  BlogRowCardBody,
  BlogRowCardImage,
  BlogRowCardMedia,
  BlogRowCardText,
  BlogRowCardTitle,
  BlogRowReadMore,
} from "../../style/blog/blogStyle";

interface BlogRowCardViewProps {
  post: BlogPost;
  variant: "list-02" | "list-03";
}

const BlogRowCardView = ({ post, variant }: BlogRowCardViewProps) => {
  const badgeLabel =
    post.category === "Car News"
      ? "news"
      : post.category === "Auto Detailing"
        ? "care"
        : "guides";

  const summary =
    variant === "list-02"
      ? "In the market for a smarter used-car buy? This guide weighs up the strongest options and shows where the practical value sits."
      : post.excerpt;

  return (
    <BlogRowCard $variant={variant}>
      <BlogRowCardMedia as={Link} to={`/blog/${post.slug}`} $variant={variant}>
        <BlogRowCardImage alt={post.title} src={post.image} />
        <BlogBadge>{badgeLabel}</BlogBadge>
      </BlogRowCardMedia>

      <BlogRowCardBody>
        <BlogMetaRow>
          <span>{post.author}</span>
          <span>{post.date}</span>
        </BlogMetaRow>

        <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
          <BlogRowCardTitle $variant={variant}>{post.title}</BlogRowCardTitle>
        </Link>

        <BlogRowCardText $variant={variant}>{summary}</BlogRowCardText>

        <BlogRowReadMore as={Link} to={`/blog/${post.slug}`}>
          Read More
          <ArrowForwardRoundedIcon fontSize="small" />
        </BlogRowReadMore>
      </BlogRowCardBody>
    </BlogRowCard>
  );
};

export default BlogRowCardView;
