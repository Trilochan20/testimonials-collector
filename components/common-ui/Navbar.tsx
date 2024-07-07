import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeSwitch from "@/lib/themeSwitcher";

const Navbar: React.FC = () => {
  const menuItems = [
    { href: "/", label: "Featues" },
    { href: "/", label: "Intergrations" },
    { href: "/", label: "Pricing" },
    { href: "/", label: "Documentation" },
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
      className="absolute w-full z-50 bg-gradient-to-b from-gray-900/10 to-gray-900/0 "
      data-test="header"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            className="inline-flex items-center font-bold tracking-wider rounded-sm focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-sky-500"
            href="/"
          >
            TESTIMONIAL C
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {renderMenuItems()}
            <ThemeSwitch />
            <Button
              className="rounded-md px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 focus:outline-none custom-blur 
              focus-visible:outline-black focus-visible:ring-black 
              hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-white
               dark:hover:text-gray-900 dark:bg-indigo-500 dark:text-gray-100 transition"
              variant="ghost"
            >
              Login
            </Button>
          </div>

          {/* Mobile menu (Hamburger) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className="bg-slate-100/50 dark:bg-transparent border border-slate-100/50"
                >
                  <Menu className="h-6 w-6 text-slate-800 dark:text-slate-200" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="max-w-[300px] bg-gray-100 dark:bg-slate-600/10
                 backdrop-blur-sm  dark:border-l-1 dark:border-slate-800/60"
              >
                <nav className="flex flex-col justify-center items-center space-y-4 mt-10">
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
