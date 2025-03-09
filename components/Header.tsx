"use client";

import React from "react";
import Link from "next/link";
import AgentPulse from "@/components/AgentPulse";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* left section */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4">
            <AgentPulse size="small" color="blue" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AgentTube
            </h1>
          </Link>
        </div>

        {/* right section */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/manage-plan">
              <Button
                variant="outline"
                className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
              >
                Manage Plan
              </Button>
            </Link>

            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
