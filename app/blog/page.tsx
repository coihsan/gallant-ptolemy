import { useState } from "react";
import { getStaticPaths, getStaticProps } from "next";
import { Markdown } from "react-markdown";
import { grayMatter } from "gray-matter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const paths = await getStaticPaths();

  const postsData = paths.map((path) => {
    const slug = path.params.slug;

    const data = grayMatter(`blog/posts/${slug}.md`);

    return {
      slug,
      title: data.title,
      description: data.description,
      content: data.content,
    };
  });

  setPosts(postsData);

  return (
    <div>
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Markdown source={post.content} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
