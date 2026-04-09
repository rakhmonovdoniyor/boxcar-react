import React from "react";
import { Link } from "react-router-dom";

import {
  blogSidebarCategories,
  blogSidebarTags,
  getRecentBlogPosts,
} from "../../data/blogData";
import {
  BlogRecentPost,
  BlogRecentPostContent,
  BlogRecentPostImage,
  BlogRecentPostMeta,
  BlogRecentPosts,
  BlogRecentPostTitle,
  BlogSidebarCard,
  BlogSidebarHeading,
  BlogSidebarLink,
  BlogSidebarLinks,
  BlogSidebarStack,
  BlogSidebarTag,
  BlogSidebarTags,
} from "../../style/blog/blogStyle";

interface BlogSidebarProps {
  excludeSlug?: string;
}

const BlogSidebar = ({ excludeSlug }: BlogSidebarProps) => {
  const recentPosts = getRecentBlogPosts(3, excludeSlug);

  return (
    <BlogSidebarStack>
      <BlogSidebarCard>
        <BlogSidebarHeading>Categories</BlogSidebarHeading>
        <BlogSidebarLinks>
          {blogSidebarCategories.map((categoryItem) => (
            <BlogSidebarLink as={Link} key={categoryItem.label} to="/blog">
              <span>{categoryItem.label}</span>
              <span>({categoryItem.count})</span>
            </BlogSidebarLink>
          ))}
        </BlogSidebarLinks>
      </BlogSidebarCard>

      <BlogSidebarCard>
        <BlogSidebarHeading>Recent Posts</BlogSidebarHeading>
        <BlogRecentPosts>
          {recentPosts.map((post) => (
            <BlogRecentPost as={Link} key={post.slug} to={`/blog/${post.slug}`}>
              <BlogRecentPostImage alt={post.title} src={post.image} />
              <BlogRecentPostContent>
                <BlogRecentPostTitle>{post.title}</BlogRecentPostTitle>
                <BlogRecentPostMeta>{post.date}</BlogRecentPostMeta>
              </BlogRecentPostContent>
            </BlogRecentPost>
          ))}
        </BlogRecentPosts>
      </BlogSidebarCard>

      <BlogSidebarCard>
        <BlogSidebarHeading>Tags</BlogSidebarHeading>
        <BlogSidebarTags>
          {blogSidebarTags.map((tag) => (
            <BlogSidebarTag key={tag}>{tag}</BlogSidebarTag>
          ))}
        </BlogSidebarTags>
      </BlogSidebarCard>
    </BlogSidebarStack>
  );
};

export default BlogSidebar;
