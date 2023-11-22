import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { textFont } from "@/app/(landing)/page";

type Props = { black?: boolean };
const Logo = ({ black }: Props) => {
  const textColor = black ? "text-gray-700" : "text-slate-100";
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
        <span className={cn("text-2xl ", textColor)}>Keeper</span>
      </div>
    </Link>
  );
};

export default Logo;
