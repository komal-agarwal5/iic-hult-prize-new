import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

const header = () => {
  return (
    <header className="w-full z-[49] shadow shadow-neutral-700/50 sticky top-0 backdrop-blur bg-gray-950/50 flex text-[1.1rem] text-zinc-400 h-20 font-semibold pb-10">
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={80}
          height={100}
          alt="logo"
          className="ml-20 cursor-pointer"
        />
      </Link>
      <div className="flex justify-center gap-12 mx-auto font-extrabold">
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Home
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          About
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Winner
        </a>
        <span className="relative right-[40px] top-[11px] hidden h-5 w-5 animate-bounce items-center justify-center sm:flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded bg-[#E0097E] opacity-75"></span>
          <span className="relative inline-flex rounded bg-[#E0097E] p-0.5 px-1 text-xs text-white">
            New
          </span>
        </span>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Submissions
        </a>
      </div>
      <ModeToggle />
    </header>
  );
};

export default header;
