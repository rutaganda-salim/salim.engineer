'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CustomStyle extends React.CSSProperties {
  '--cross-size': string;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  views: number;
}

export default function BlogPage() {
  const crossStyle: CustomStyle = {
    '--cross-size': '10px'
  };

  const [posts, setPosts] = useState<BlogPost[]>([
    { slug: 'making-of-scira', title: 'making of scira', date: 'Mar 16, 2025', views: 251 },
    { slug: 'begin', title: 'begin.', date: 'Jan 16, 2025', views: 97 }
  ]);

  // Simulate incrementing view counts randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setPosts(currentPosts =>
        currentPosts.map(post => {
          // Randomly increment a post's view count (1 in 5 chance)
          if (Math.random() < 0.2) {
            return { ...post, views: post.views + 1 };
          }
          return post;
        })
      );
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container px-4 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[13px] text-neutral-500 italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo2 mb-[2px]">
            <path d="M9 14 4 9l5-5"></path>
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
          </svg>
          Index
        </Link>
      </div>

      <main className="container px-4 py-8 max-w-2xl mx-auto">
        <main>
          <h1 className="mb-4 text-lg">Blog</h1>
          <ul className="m-auto flex flex-col gap-1">
            {posts.map((post) => (
              <li key={post.slug} className="py-2 text-neutral-300">
                <Link
                  className="group flex items-center justify-between gap-1 hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>h3]:text-white hover:[&>span]:text-white border-0 relative"
                  href={`/blog/${post.slug}`}
                >
                  <div className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block" style={crossStyle}>
                    <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  </div>
                  <div className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block" style={crossStyle}>
                    <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  </div>
                  <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
                    {post.title}
                  </h3>
                  <span className="ml-1 flex items-center gap-1 whitespace-nowrap transition-colors">
                    <span className="animation-fill-mode-both animate-slideFadeUp">{post.views} views</span>•<span>{post.date}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </main>
    </>
  );
}
