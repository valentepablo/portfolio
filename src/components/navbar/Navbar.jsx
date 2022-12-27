import MenuIcon from "./MenuIcon";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [goingDown, setGoingDown] = useState(false);

  open
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 5) {
        setGoingDown(true);
      }
      if (currentScrollY <= 5) {
        setGoingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingDown]);

  return (
    <header
      className={`${
        goingDown ? "border-b " : "border-none"
      } fixed inset-x-0 top-0 z-50 border-zinc-800`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[10px]"></div>

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <p className="uppercase sm:text-xl">
          pablo<span className="font-bold">valente</span>
        </p>
        <ul className="hidden gap-8 text-sm text-neutral-200 sm:flex">
          <li>
            <a
              href="#sobre-mi"
              className="cursor-pointer transition hover:text-white"
            >
              Sobre mi
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="cursor-pointer transition hover:text-white"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer transition hover:text-white">
              Contacto
            </a>
          </li>
        </ul>
        <div
          className={`${
            open ? "translate-x-80" : "translate-x-0"
          } fixed bottom-6 right-0 flex aspect-square h-12 items-center justify-center rounded-bl-lg rounded-tl-lg border-y border-l border-zinc-800 bg-black transition sm:hidden`}
        >
          <button onClick={() => setOpen(!open)}>
            {/* {open ? <CloseIcon /> : <MenuIcon />} */}
            <MenuIcon />
          </button>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open
              ? "pointer-events-auto opacity-100 "
              : "pointer-events-none opacity-0"
          } fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm transition duration-200 ease-out`}
        ></div>
        <ul
          className={`${
            open ? "translate-x-0" : "translate-x-[600px]"
          } fixed inset-x-5 bottom-1/2 z-20 translate-y-1/2 divide-y divide-zinc-800 rounded-lg border border-zinc-800 bg-black text-center transition delay-150 duration-200 sm:hidden`}
        >
          <a
            href="#sobre-mi"
            className="block cursor-pointer transition hover:text-white"
          >
            <li className="p-6" onClick={() => setOpen(!open)}>
              Sobre mi
            </li>
          </a>

          <a
            href="#portfolio"
            className="block cursor-pointer transition hover:text-white"
          >
            <li className="p-6" onClick={() => setOpen(!open)}>
              Portfolio
            </li>
          </a>

          <a
            href="#"
            className="block cursor-pointer transition hover:text-white"
          >
            <li className="p-6" onClick={() => setOpen(!open)}>
              Contacto
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
