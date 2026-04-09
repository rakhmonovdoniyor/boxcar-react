import React from "react";
import { Link } from "react-router-dom";

import type { BlogPost } from "../../data/blogData";
import {
  BlogBadge,
  BlogCard,
  BlogCardImage,
  BlogCardImageWrap,
  BlogCardTitle,
  BlogMetaRow,
} from "../../style/blog/blogStyle";

interface BlogCardViewProps {
  post: BlogPost;
}

const BlogCardView = ({ post }: BlogCardViewProps) => {
  const badgeLabel =
    post.category === "Car News"
      ? "news"
      : post.category === "Auto Detailing"
        ? "care"
        : "guides";

  return (
    <BlogCard>
      <BlogCardImageWrap as={Link} to={`/blog/${post.slug}`}>
        <BlogCardImage alt={post.title} src={post.image} />
        <BlogBadge>{badgeLabel}</BlogBadge>
      </BlogCardImageWrap>

      <BlogMetaRow>
        <span>{post.author}</span>
        <span>{post.date}</span>
      </BlogMetaRow>

      <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
        <BlogCardTitle>{post.title}</BlogCardTitle>
      </Link>
    </BlogCard>
  );
};

export default BlogCardView;
