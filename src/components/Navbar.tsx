import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { auth, signOut, signIn } from "@/auth";
import { Button } from "@/components/ui/button"


const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center text-black">
        <Link href="/">
          <Image src="/idea-hub-logo.jpg" alt="logo" width={100} height={1} />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button variant="destructive" className='bg-red-500 hover:bg-red-700 text-white'>Log Out</Button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button className='bg-green-500 hover:bg-green-700 text-white' type='submit'>Login</Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
