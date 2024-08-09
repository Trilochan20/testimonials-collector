import React from "react";
import { FaTwitter, FaGithub, FaSlack } from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Community", href: "#" },
      { name: "Help & Support", href: "#" },
      { name: "eBook", href: "#" },
      { name: "What's New", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "Api", href: "#" },
      { name: "Status", href: "#" },
      { name: "GitHub", href: "#" },
    ],
  },
];

const industries: FooterLink[] = [
  { name: "Financial Services", href: "#" },
  { name: "Education", href: "#" },
];

const legalLinks: FooterLink[] = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Status", href: "#" },
];

const socialLinks = [
  { icon: FaTwitter, href: "#" },
  { icon: FaGithub, href: "#" },
  { icon: FaSlack, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none font-semibold text-xl text-slate-900 focus:outline-none focus:opacity-80 dark:text-slate-100"
            href="#"
            aria-label="Brand"
          >
            TESTIMONIAL C
          </a>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            © 2024 Testimonial C.
          </p>
        </div>

        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-slate-900 uppercase dark:text-slate-100">
              {section.title}
            </h3>
            <div className="mt-3 grid space-y-3 text-sm">
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex}>
                  <a
                    className="inline-flex gap-x-2 text-slate-600 hover:text-slate-800 focus:outline-none focus:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:focus:text-slate-200"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </p>
              ))}
            </div>
            {section.title === "Developers" && (
              <>
                <h3 className="mt-7 text-sm font-semibold text-slate-900 uppercase dark:text-slate-100">
                  Industries
                </h3>
                <div className="mt-3 grid space-y-3 text-sm">
                  {industries.map((industry, industryIndex) => (
                    <p key={industryIndex}>
                      <a
                        className="inline-flex gap-x-2 text-slate-600 hover:text-slate-800 focus:outline-none focus:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:focus:text-slate-200"
                        href={industry.href}
                      >
                        {industry.name}
                      </a>
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <div className="space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  className="inline-flex gap-x-2 text-slate-600 hover:text-slate-800 focus:outline-none focus:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:focus:text-slate-200"
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="mt-3 sm:hidden">
              <a
                className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                href="#"
                aria-label="Brand"
              >
                TESTIMONIAL C
              </a>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                © 2024 Testimonial C.
              </p>
            </div>

            <div className="space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="inline-block text-slate-500 hover:text-slate-800 focus:outline-none focus:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200 dark:focus:text-slate-200"
                  href={link.href}
                >
                  <link.icon className="shrink-0 size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
