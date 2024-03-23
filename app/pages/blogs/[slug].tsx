import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "./lib/post";

interface BlogPostProps {
  post: { title: string; date: string };
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

export default BlogPost;
