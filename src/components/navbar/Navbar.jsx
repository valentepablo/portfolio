import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
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
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <ul
          className={`${
            open ? "block" : "hidden"
          } fixed inset-x-0 bottom-0 space-y-4 border-t border-zinc-800 bg-black p-4`}
        >
          <li className="rounded-md border border-zinc-800 bg-gradient-to-r from-black to-[#090909] px-4 py-3">
            <a href="#" className="cursor-pointer transition hover:text-white">
              Portfolio
            </a>
          </li>
          <li className="rounded-md border border-zinc-800 bg-gradient-to-r from-black to-[#090909] px-4 py-3">
            <a href="#" className="cursor-pointer transition hover:text-white">
              Sobre mi
            </a>
          </li>
          <li className="rounded-md border border-zinc-800 bg-gradient-to-r from-black to-[#090909] px-4 py-3">
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
