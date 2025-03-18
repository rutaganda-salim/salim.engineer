'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function BeginBlogPost() {
  const [viewCount, setViewCount] = useState(97);

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
            <h1 className="font-medium">begin.</h1>
            <span className="text-sm text-neutral-500">{viewCount} views</span>
          </div>
          <time className="mb-10 block text-sm text-neutral-500">January 16, 2025</time>

          <p className="min-h-[1lh] mb-4">begin that task now. we often linger too long in our minds, trapped in cycles of thought, hesitation, or anticipation before acting. it's as if we're waiting for the perfect moment, a clear sign that everything will fall into place. but life doesn't work that way—there's no flawless starting line.</p>

          <p className="min-h-[1lh] mb-4">we just need to step forward, anywhere, and let the journey shape itself. why do we care so much about what others think? their opinions fade fast <a href="https://www.verywellmind.com/the-psychology-of-procrastination-2795944" className="text-neutral-300 no-underline hover:text-white transition-colors">since it's tied to approval-seeking</a>.</p>

          <p className="min-h-[1lh] mb-4">time flows on, an unyielding river… and now is all we grasp. the past fades, the future shimmers out of reach—only this instant pulses with possibility. so why do we stall? why stack our dreams into piles marked "later"?</p>

          <p className="min-h-[1lh] mb-4">often, it's fear dressed as caution <a href="https://hbr.org/2017/10/5-research-based-strategies-for-overcoming-procrastination" className="text-neutral-300 no-underline hover:text-white transition-colors">or a need for control</a>. studies show it's not laziness but emotions like anxiety pushing us off track <a href="https://www.mcleanhospital.org/essential/procrastination" className="text-neutral-300 no-underline hover:text-white transition-colors">since it messes with mental health</a>.</p>

          <p className="min-h-[1lh] mb-4">yet to live fully is to begin, over and over, trusting each step reveals its own truth. procrastination—that quiet thief—robs us not just of time but of potential. it's the habit of sidelining life, letting "someday" stretch into eternity.</p>

          <p className="min-h-[1lh] mb-4">but eternity is an illusion; now is what we have. research says chronic delayers <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00746/full" className="text-neutral-300 no-underline hover:text-white transition-colors">so it hits 20% of adults</a> face more stress and less joy. yet some claim waiting sparks creativity <a href="https://professional.dce.harvard.edu/blog/the-perks-of-procrastination/" className="text-neutral-300 no-underline hover:text-white transition-colors">since it lets ideas simmer</a>.</p>

          <p className="min-h-[1lh] mb-4">so rise, begin, and let action teach what pondering can't. the clock ticks—will you move with it?</p>
        </article>
      </main>
    </>
  );
}
