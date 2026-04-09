import React from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "../../data/blogData";
import { BlogVariantLink, BlogVariantNav } from "../../style/blog/blogStyle";

interface BlogVariantSwitcherProps {
  active: "list-01" | "list-02" | "list-03" | "single";
  singlePath?: string;
}

const BlogVariantSwitcher = ({ active, singlePath }: BlogVariantSwitcherProps) => {
  const items = [
    { key: "list-01", label: "List 01", path: "/blog" },
    { key: "list-02", label: "List 02", path: "/blog/list-02" },
    { key: "list-03", label: "List 03", path: "/blog/list-03" },
    {
      key: "single",
      label: "Single",
      path: singlePath ?? `/blog/${blogPosts[0]?.slug ?? ""}`,
    },
  ] as const;

  return (
    <BlogVariantNav>
      {items.map((item) => (
        <BlogVariantLink
          as={Link}
          key={item.key}
          to={item.path}
          $active={item.key === active}
        >
          {item.label}
        </BlogVariantLink>
      ))}
    </BlogVariantNav>
  );
};

export default BlogVariantSwitcher;
