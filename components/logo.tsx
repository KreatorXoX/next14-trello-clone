import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { textFont } from "@/app/(landing)/page";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div
        className={cn(
          "flex items-center justify-center hover:opacity-60 transition invisible md:visible",
          textFont.className
        )}
      >
        <div className="h-16 w-16 relative">
          <Image src={"/logo.svg"} fill alt="logo" />
        </div>
        <span className="text-slate-100 text-2xl ">Keeper</span>
      </div>
    </Link>
  );
};

export default Logo;
