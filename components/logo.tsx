import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { textFont } from "@/app/(landing)/page";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div
        className={cn(
          "flex items-center justify-center hover:opacity-60 transition",
          textFont.className
        )}
      >
        <div className="h-20 w-20 lg:h-24 lg:w-24 relative">
          <Image src={"/logo.svg"} fill alt="logo" />
        </div>
        <span className="text-slate-100 text-2xl hidden lg:flex">Keeper</span>
      </div>
    </Link>
  );
};

export default Logo;
