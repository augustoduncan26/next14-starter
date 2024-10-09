import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN EXTERNAL API
// const getData = async () => {
//   //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

// FETCH DATA WITH AN LOCAL API
const getData = async () => {
  const res = await fetch(process.env.AUTH_API_URL + "blog", {next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN LOCAL API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
