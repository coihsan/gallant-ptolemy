import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "blog/posts");

export interface Post {
  filename: string;
  data: {
    title: string;
    date: number;
  };
  content: string;
}

export function getAllPosts(): Post[] {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      filename,
      data,
      content,
    };
  });
}
