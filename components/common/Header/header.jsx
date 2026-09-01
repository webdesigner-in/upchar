import { Button } from "@/components/ui/button";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className=" sticky top-1 bg-gray-400/10  backdrop-blur-2xl py-3 md:py-5 mb-16 z-20">
      <nav className=" flex justify-between items-center px-5 md:px-8">
        <Link href="/">
          <div className=" w-24 md:w-36">
            <Image
              className="w-auto h-12 object-contain"
              src="/logo.svg"
              alt="upchar footer logo"
              width={100}
              height={100}
            />
          </div>
        </Link>

        <Show when="signed-out">
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </Show>
        <Show when="signed-in">
          <div>
            <UserButton />
          </div>
        </Show>
      </nav>
    </header>
  );
}
