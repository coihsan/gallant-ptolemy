// import { getAllPosts } from "../../utils/mdParser";

// export default function BlogPost({ post }) {
//   return (
//     <div>
//       <h1>{post.data.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: post.content }} />
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts();

//   const paths = posts.map((post) => ({
//     params: { slug: post.filename.replace(".md", "") },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const posts = getAllPosts();
//   const post = posts.find((p) => p.filename.replace(".md", "") === slug);

//   return {
//     props: {
//       post,
//     },
//   };
// }
