import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  className,
  title,
  description,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
        <div className="flex justify-between items-center my-4">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-2xl">
            {title}
            </div>
            

            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200  text-2xl">
            {description}
            </div>
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          <Image alt="dupa" width={400} height={400} src={img} />
        </div>
        <Link href="/order">
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Buy
        </button>         
        </Link> 
    </div>
  );
};