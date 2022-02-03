import React from 'react';
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

function BlogPost({ frontmatter, content }) {
  console.log(frontmatter);
  return (
    <div>
      <img src={`/${frontmatter.socialImage}`} className='w-3/4 mx-auto' />
      <div className="prose">
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
      </div>
    </div>
  );
}

export default BlogPost;

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  console.log("Paths", paths);
  //I also included a fallback: false which makes sure non existing URL's will fail and show a 404.
  return {
    paths,
    fallback: false,
  };
  
}

export async function getStaticProps({params}) {
  const {slug} =params
  
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}