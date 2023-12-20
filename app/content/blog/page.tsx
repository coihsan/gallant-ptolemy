import { FC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../blog/utils/blog";

interface BlogProps {
  posts: Array<{ slug: string; title: string; date: string }>;
}

const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <h1>Blog Archive</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
