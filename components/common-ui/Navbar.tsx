import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeSwitch from "@/lib/themeSwitcher";

const Navbar: React.FC = () => {
  const menuItems = [
    { href: "/courses", label: "Courses" },
    { href: "/recipes", label: "Recipes" },
    { href: "/posts", label: "Posts" },
    { href: "/frontend-first", label: "Podcast" },
  ];

  const renderMenuItems = () => (
    <>
      {menuItems.map((item) => (
        <a
          key={item.href}
          className="block rounded-sm text-sm  font-semibold text-zinc-800 dark:text-zinc-200  
          focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className="relative z-50 bg-gradient-to-b from-gray-900/20 to-gray-900/0"
      data-test="header"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            className="inline-flex items-center rounded-sm focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-sky-500"
            href="/"
          >
            Logo
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {renderMenuItems()}
            <ThemeSwitch />
            <a
              className="rounded-sm px-3 py-1.5 text-sm font-semibold text-white transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
              href="/login?redirect=%2F"
            >
              Sign in
            </a>
            <a
              className="rounded bg-accent px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-accent-light focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
              href="/pricing"
            >
              Buy now
            </a>
          </div>

          {/* Mobile menu (Hamburger) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="max-w-[300px]">
                {/* <SheetClose className="py-4">X</SheetClose> */}
                <nav className="flex flex-col justify-center items-center space-y-4 mt-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      className="block  p-4 font-semibold  text-zinc-800 dark:text-zinc-200 focus:border-b-2  focus:border-offset-2 focus:border-zinc-500 "
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                  <ThemeSwitch />
                  <a
                    className="rounded-sm px-3 py-1.5 text-sm font-semibold text-white transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
                    href="/login?redirect=%2F"
                  >
                    Sign in
                  </a>
                  <a
                    className="rounded bg-accent px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-accent-light focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
                    href="/pricing"
                  >
                    Buy now
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
