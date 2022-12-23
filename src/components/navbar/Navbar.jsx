import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <header className="fixed inset-x-0 z-30 bg-black">
      <nav className=" mx-auto flex h-16 max-w-7xl items-center justify-between bg-black px-4">
        <p className="uppercase">
          pablo<span className="font-bold">valente</span>
        </p>
        <ul className="hidden gap-8 text-sm text-neutral-400 sm:flex">
          <li>
            <a href="#" className="cursor-pointer transition hover:text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer transition hover:text-white">
              Sobre mi
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
          } fixed bottom-3 right-0 flex aspect-square h-12 items-center justify-center rounded-bl-lg rounded-tl-lg border-y border-l border-zinc-800 bg-black transition sm:hidden`}
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
          } fixed inset-0 z-10 bg-black bg-opacity-30 transition duration-200 ease-out`}
        ></div>
        <ul
          className={`${
            open ? "translate-y-0" : "translate-y-[300px]"
          } fixed inset-x-0 bottom-0 z-20 divide-y divide-zinc-800 border-t border-zinc-800 bg-black transition delay-150 duration-200`}
        >
          <li className="p-6">
            <a href="#" className="cursor-pointer transition hover:text-white">
              Portfolio
            </a>
          </li>
          <li className="p-6">
            <a href="#" className="cursor-pointer transition hover:text-white">
              Sobre mi
            </a>
          </li>
          <li className="p-6">
            <a href="#" className="cursor-pointer transition hover:text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
