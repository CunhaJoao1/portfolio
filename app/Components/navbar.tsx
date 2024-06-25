import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const arr_menus = ['HOME', 'WORK', 'ABOUT'];
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          const sectionId = section.getAttribute("id");
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("#home");
    } else {
      setActiveSection(`#${pathname.replace("/", "").toLowerCase()}`);
    }
  }, [pathname]);

  return (
    <nav className="text-white p-5 flex justify-between fixed w-full z-10 backdrop-blur-sm border-b border-gray-100/5">
      <h2 className="cursor-pointer">Victor Cunha</h2>
      <ul className="flex gap-8">
        {arr_menus.map((item) => {
          const link = `#${item.toLowerCase()}`;
          const isActive = link === activeSection;
          return (
            <li key={item} className="relative">
              <Link href={link}>
                <p
                  className={`${
                    isActive
                      ? "bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] bg-clip-text text-transparent"
                      : ""
                  }`}
                  onClick={() => setActiveSection(link)}
                >
                  {item}
                </p>
              </Link>
              <span
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-1 rounded-md bg-white mt-1 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
