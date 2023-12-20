import { useState } from "react";
import { getStaticPaths, getStaticProps } from "next";
import { Markdown } from "react-markdown";
import { grayMatter } from "gray-matter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  // Get the paths to all the blog posts.
  const paths = await getStaticPaths();

  // Get the data for each blog post.
  const postsData = paths.map((path) => {
    const slug = path.params.slug;

    // Read the metadata from the Markdown file.
    const data = grayMatter(`blog/${slug}.md`);

    // Return the post data.
    return {
      slug,
      title: data.title,
      description: data.description,
      content: data.content,
    };
  });

  // Set the posts data.
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
