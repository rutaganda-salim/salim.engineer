"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface CustomStyle extends React.CSSProperties {
  "--cross-size": string;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  views: number;
}

interface WorkProject {
  slug: string;
  title: string;
  year: string;
  description: string;
}

export default function Home() {
  const crossStyle: CustomStyle = {
    "--cross-size": "10px",
  };

  const [posts, setPosts] = useState<BlogPost[]>([
    {
      slug: "making-of-scira",
      title: "making of scira",
      date: "Mar 16, 2025",
      views: 251,
    },
    { slug: "begin", title: "begin.", date: "Jan 16, 2025", views: 97 },
  ]);

  const projects: WorkProject[] = [
    {
      slug: "ShipFree",
      title: "ShipFree",
      year: "2025",
      description:
        "An interactive color mixer built with custom knob controls. Experiment with RGB values to create unique colors in real-time.",
    },
    {
      slug: "mentor",
      title: "Mentor AI",
      year: "2025",
      description:
        "An AI assistant that can answer questions about these projects. Built with Vercel AI SDK and OpenAI.",
    },
  ];

  // Simulate incrementing view counts randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setPosts((currentPosts) =>
        currentPosts.map((post) => {
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
    <main className="container max-w-3xl mx-auto">
      <main className="mb-32 text-neutral-800">
        <h1 className='text-sm font-semibold  highlight text-black'>
          Salim Rutaganda
        </h1>
        <p className="text-neutral-600">kigali, rw.</p>

        <section className="mt-6">
          <p className="text-gray-600">
            I'm a indie developer passionate about user interfaces and
            generative AI. Exploring design and crafting thoughtful
            interactions. Obsessed with the small details, while mastering the
            web one step at a time.
          </p>
          <p className="mt-4 text-gray-600">
            Building{" "}
            <a
              className="underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
              href="https://shipfree.idee8.agency"
              target="_blank"
            >
              shipfree
            </a>{" "}
            — A minimalistic AI-powered search engine that helps you find
            information of the internet. Scira is currently sponsored by{" "}
            <a
              className="underline decoration-stone-500 decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-800 hover:decoration-stone-800 highlight text-black"
              href="https://vercel.com"
              target="_blank"
            >
              Vercel
            </a>{" "}
            and{" "}
            <a
              className=" underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
              href="https://x.ai"
              target="_blank"
            >
              xAI
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mt-12  highlight text-black">me</h2>
          <p className="mt-2 text-gray-600">
            I started programming at age 10, curious about how the web works.
            Learning JavaScript led me to build simple websites, which
            eventually evolved into creating products that solve real-world
            problems.
          </p>
          <p className="mt-4 text-gray-600">
            Over time, I fell in love with the web platform. There's something
            special about creating experiences that anyone can access instantly
            from anywhere in the world. I find real joy in crafting polished,
            thoughtful websites - a satisfaction that never goes away.
          </p>
        </section>

        <section className="mt-12">
          <Link href="/work">
            <h2 className=" highlight text-black">work</h2>
          </Link>
          <p className="mt-2 text-gray-600">
            Interactive experiments and projects exploring the intersection of
            design and technology.
          </p>

          <div className="py-4">
            <ul className="m-auto flex flex-col gap-1">
              {projects.map((project) => (
                <li key={project.slug} className="py-2 text-zinc-700">
                  <Link
                    className="group flex flex-col gap-1 hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-400/50 hover:[&>div>h3]:text-black hover:[&>div>span]:text-neutral-900 border-0 relative"
                    href={`/work/${project.slug}`}
                  >
                    <div
                      className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
                      style={crossStyle}
                    >
                      <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-400"></div>
                    </div>
                    <div
                      className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
                      style={crossStyle}
                    >
                      <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-400"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium underline decoration-neutral-500/50 underline-offset-[3px] transition-colors highlight text-black">
                        {project.title}
                      </h3>
                      <span className="ml-1 whitespace-nowrap text-neutral-600 transition-colors">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors">
                      {project.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <Link href="/blog">
            <h2 className="highlight text-black">writing</h2>
          </Link>
          <p className="mt-2 text-gray-600">
            I write about things I'm learning, my experiences and thoughts on
            design and technology.
          </p>

          <div className="py-4">
            <ul className="m-auto flex flex-col gap-1">
              {posts.map((post) => (
                <li key={post.slug} className="py-2 text-neutral-700">
                  <Link
                    className="group flex items-center justify-between gap-1 hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-400/50 hover:[&>h3]:text-black hover:[&>span]:text-black border-0 relative"
                    href={`/blog/${post.slug}`}
                  >
                    <div
                      className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
                      style={crossStyle}
                    >
                      <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-400"></div>
                    </div>
                    <div
                      className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
                      style={crossStyle}
                    >
                      <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-400"></div>
                    </div>
                    <h3 className="grow font-medium  underline decoration-neutral-500/50 underline-offset-[3px] transition-colors highlight text-black">
                      {post.title}
                    </h3>
                    <span className="ml-1 flex items-center gap-1 whitespace-nowrap transition-colors">
                      <span className="animation-fill-mode-both animate-slideFadeUp">
                        {post.views} views
                      </span>
                      •<span>{post.date}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mt-12  highlight text-black">reach</h2>
          <div className="mt-2 flex flex-wrap gap-2 text-gray-600">
            <span className="whitespace-nowrap">
              <span>connect on </span>
              <a
                className=" underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
                href="https://x.com/salimnunez01"
                target="_blank"
              >
                𝕏
              </a>
              <span className="mx-1 text-neutral-500/50">·</span>
              <a
                className=" underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
                href="https://github.com/rutaganda-salim"
                target="_blank"
              >
                GitHub
              </a>
              <span className="mx-1 text-neutral-500/50">·</span>
              <a
                className=" underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
                href="https://peerlist.io/salim_"
                target="_blank"
              >
                Peerlist
              </a>
            </span>
            <span>
              — or send me an email at{" "}
              <a
                className="underline decoration-black decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900 highlight text-black"
                href="mailto:me@salim.engineer"
                target="_blank"
              >
                me@salim.engineer
              </a>
            </span>
          </div>
        </section>
      </main>
    </main>
  );
}
