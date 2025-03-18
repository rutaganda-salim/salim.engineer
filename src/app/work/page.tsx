'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CustomStyle extends React.CSSProperties {
  '--cross-size': string;
}

interface WorkProject {
  slug: string;
  title: string;
  year: string;
  description: string;
}

export default function WorkPage() {
  const crossStyle: CustomStyle = {
    '--cross-size': '10px'
  };

  const [projects] = useState<WorkProject[]>([
    {
      slug: 'knob',
      title: 'RGB Knob',
      year: '2025',
      description: 'An interactive color mixer built with custom knob controls. Experiment with RGB values to create unique colors in real-time.'
    },
    {
      slug: 'chat',
      title: 'AI Chat',
      year: '2025',
      description: 'An AI assistant that can answer questions about these projects. Built with Vercel AI SDK and OpenAI.'
    }
  ]);

  return (
    <>
      <div className="container px-4 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[13px] text-neutral-500 italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo2 mb-[2px]">
            <path d="M9 14 4 9l5-5"></path>
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
          </svg>
          back home
        </Link>
      </div>

      <main className="container px-4 py-8 max-w-2xl mx-auto">
        <main className="mb-32">
          <h1 className="mb-4 text-lg font-medium text-zinc-950">Work</h1>
          <p className="mb-4 text-neutral-400">A collection of interactive experiments and projects exploring the intersection of design and technology.</p>

          <ul className="m-auto flex flex-col gap-1">
            {projects.map((project) => (
              <li key={project.slug} className="py-2 text-neutral-300">
                <Link
                  className="group flex flex-col gap-1 hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>div>h3]:text-white hover:[&>div>span]:text-white border-0 relative"
                  href={`/work/${project.slug}`}
                >
                  <div className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block" style={crossStyle}>
                    <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  </div>
                  <div className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block" style={crossStyle}>
                    <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">{project.title}</h3>
                    <span className="ml-1 whitespace-nowrap text-neutral-500 transition-colors">{project.year}</span>
                  </div>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{project.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </main>
    </>
  );
}
