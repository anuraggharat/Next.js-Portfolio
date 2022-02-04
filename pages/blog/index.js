import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import fs from "fs";
import matter from "gray-matter";
function Blog({posts}) {
  return (
    <div>
      <h1 className="text-4xl font-semibold z-0">Blogs</h1>
      <div className="mt-10">
        {posts &&
          posts.map((post, index) => (
            <BlogCard post={post.frontmatter} slug={post.slug} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  // We use this function to get all posts
  // we will use fs to get files
  //reads the contents of the directory posts
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${filename}`, "utf-8");
    const filedetails = matter(readFile);

    const { data: frontmatter } = filedetails;
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}