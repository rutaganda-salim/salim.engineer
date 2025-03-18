import Link from 'next/link';
import RGBKnob from './RGBKnob';

export default function KnobPage() {
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
        <div className="flex justify-center items-center border border-neutral-900 rounded-lg gap-8 flex-col p-8 bg-neutral-950">
          <RGBKnob />
        </div>
      </main>
    </>
  );
}
