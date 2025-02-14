"use client";

import { Link } from 'react-scroll'

export default function MagicButton({ text, to }: { text: string, to: string}){
    return (
      <Link to={to} smooth={true} duration={300}>
        <button className="w-64 inline-flex h-10 py-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">
          {text}
        </button>
      </Link>
    )
}
        
  
      