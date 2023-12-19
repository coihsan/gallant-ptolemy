import Link from "next/link";
import { getAllPosts } from "../../utils/mdParser";

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog Archive</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filename}>
            <Link href={`/blog/${post.filename.replace(".md", "")}`}>
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
