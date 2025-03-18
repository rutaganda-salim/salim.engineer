'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MakingOfSciraBlogPost() {
  const [viewCount, setViewCount] = useState(251);

  // Simulate occasional view increases
  useEffect(() => {
    // Increment view on page load
    setViewCount(prev => prev + 1);

    const interval = setInterval(() => {
      // 20% chance to increment a view every 10 seconds
      if (Math.random() < 0.2) {
        setViewCount(prev => prev + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container px-4 max-w-2xl mx-auto">
        <Link href="/blog" className="flex items-center gap-2 text-[13px] text-neutral-500 italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo2 mb-[2px]">
            <path d="M9 14 4 9l5-5"></path>
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
          </svg>
          Blog
        </Link>
      </div>

      <main className="container px-4 py-8 max-w-2xl mx-auto">
        <article className="text-neutral-400 prose text-[13px]">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">making of scira</h1>
            <span className="text-sm text-neutral-500">{viewCount} views</span>
          </div>
          <time className="mb-10 block text-sm text-neutral-500">March 16, 2025</time>

          <p className="min-h-[1lh] mb-4">Building Scira began as a personal challenge: could I create a search experience that was both minimal and powerful? The answer led me down a fascinating path exploring the intersection of AI and web technology.</p>

          <p className="min-h-[1lh] mb-4">Search is one of those deceptively complex problems. On the surface, it seems straightforward—match queries to results. But creating genuinely useful search involves understanding user intent, relevance, and the subtle ways people express their information needs.</p>

          <p className="min-h-[1lh] mb-4">I started with a simple principle: focus on the content, not the interface. The design had to get out of the way, presenting information without visual distraction. This meant carefully considering every element:</p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Typography that emphasizes readability</li>
            <li>Minimal color palette to reduce cognitive load</li>
            <li>Focused interaction model—just type and read</li>
            <li>Zero animations that don't serve functionality</li>
          </ul>

          <p className="min-h-[1lh] mb-4">The technical architecture evolved through several iterations. Early versions used traditional search indices, but the real breakthrough came with integrating AI models. Modern language models can understand semantic relationships between concepts in ways traditional keyword matching can't.</p>

          <p className="min-h-[1lh] mb-4">Working with xAI's models provided the computational understanding needed to power Scira's relevance engine. Vercel's infrastructure made deployment and scaling straightforward, allowing me to focus on the core problems rather than DevOps.</p>

          <p className="min-h-[1lh] mb-4">The current version of Scira represents thousands of small decisions and refinements. Each interaction has been considered and reconsidered, always asking: "Does this help users find what they need more effectively?"</p>

          <p className="min-h-[1lh] mb-4">What's next? I'm exploring ways to make search more contextual and personalized without compromising privacy. The challenge remains: how do we build tools that extend human knowledge while respecting human autonomy?</p>
        </article>
      </main>
    </>
  );
}
