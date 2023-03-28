import React, { useEffect, useState } from "react";
//[slug] is used for dynamic routing
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs";
//find slug according to file
// populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return {__html:c};  //c for content
  }
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();
  // useEffect(()=>{
  //   if(!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     setBlog(parsed)
  //   })
  // },[router.isReady])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            {/* dangerouslySetInnerHTML is a react alternative if innerHTML */}
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </main>
    </div>
    );
};
// static site rendering without using api
export async function getStaticPaths() {
  return {
      paths: [
          { params: { slug: 'how-to-learn-flask' } },
          { params: { slug: 'how-to-learn-javascript' } },
          { params: { slug: 'how-to-learn-nextjs' } },
      ],
      fallback: true // false or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  return {
      props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

// server side rendering
// export async function getServerSideProps(context) {
//   // const router = useRouter();
//     const { slug } = context.query; // gives slug
//     let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog=await data.json();
//   return {
//     props: { myBlog }
//   }
// }

export default Slug;
