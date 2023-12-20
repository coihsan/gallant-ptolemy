import React from "react";
import grayMatter from "gray-matter";
import Markdown from "react-markdown";

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  description: string;
  tag: string;
}

const ArticleInfo = ({
  title,
  author,
  date,
  description,
  tag,
}: ArticleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Oleh: {author}</p>
      <p>Tanggal: {date}</p>
      <p>{description}</p>
      <Markdown source={tag} />
    </div>
  );
};

const getStaticPaths = async () => {
  const files = await fs.readdirSync("./data/blog");
  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));
  return { paths };
};

const getStaticProps = async ({ params }) => {
  const file = await fs.readFileSync(`./blog/posts/${params.slug}.md`, "utf8");
  const data = grayMatter.default(file);
  return {
    props: {
      title: data.title,
      author: data.author,
      date: data.date,
      description: data.description,
      content: data.content,
    },
  };
};

export default ArticleInfo;
