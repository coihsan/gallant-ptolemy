import Link from "next/link";
import { getAllPosts } from "../blog/utils/mdParser";

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <h1>Blog Archive</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filename}>
            <Link href={`/app/blog/${posts.filename.replace(".md", "")}`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
