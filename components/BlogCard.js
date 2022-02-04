import Link from 'next/link';
import React from 'react';

export default function BlogCard({post,slug}) {
  return (
    <div className="flex flex-row mb-16  pb-6 cursor-pointer">
      <div className="w-3/5">
        <Link href={`/blog/${slug}`}>
          <h1 className="text-xl font-medium">{post.title}</h1>
        </Link>
        <p className="text-xs text-gray-600">{post.date}</p>
        <p className="text-gray-600 mt-3 text-md">{post.metaDesc}</p>
        <div className="flex flex-row mt-4 text-sm">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 px-2 py-1 border border-gray-400 text-gray-800 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-2/5 px-5">
        <img className="rounded-xl hover:shadow-lg" src={post.socialImage} />
      </div>
    </div>
  );
}
