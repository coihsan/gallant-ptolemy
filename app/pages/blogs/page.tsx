import { getSortedPostsData } from "../../pages/blogs/lib/post";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function BlogsPosts() {
  return (
    <section>
      <section>
        <h2>Blog</h2>
        <ul>
          {getSortedPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
