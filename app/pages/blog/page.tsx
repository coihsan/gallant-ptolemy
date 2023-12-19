import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
}

interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomOneDark}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join("posts", filename),
      "utf-8",
    );
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
      date: data.date.toISOString(),
    };
    return {
      slug: filename.replace(".md", ""),
      content,
      ...frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    },
  };
}

export default Blog;
