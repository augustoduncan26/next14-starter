import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = [];//await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  //const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        <Image
          className={styles.avatar}
          src="https://images.pexels.com/photos/16541441/pexels-photo-16541441/free-photo-of-tourists-having-fun-by-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={50}
          height={50}
          />
          {/*post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )*/}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}> 01.01.2024
              {/*post.createdAt.toString().slice(4, 16)*/}
            </span>
          </div>
        </div>
        <div className={styles.content}>{/*post.desc*/}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;