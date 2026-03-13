
import { navLinks } from "../constant";
import Trial from "./Trial";
import Book from "./Book";
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { useState } from "react";

const Navbar = () => {
    const [toggle, seToggle] = useState(false);
    const [active, setActive] = useState("Home");
    return (
        <nav className="">
            <ul className="flex justify-between items-center gap-20 py-10 px-10
                md:px-20
                lg:flex-row lg:justify-center
                ">
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex  justify-center items-baseline bg-white w-3 h-3 text-2xl"></div>
                        <div className="flex  justify-end items-center bg-white w-3 h-3 mt-5"></div>
                    </div>
                    <a href="#home">
                        <h1 className="font-semibold text-xl text-white">FormAssembly</h1>
                    </a>
                </div>
                <ul className="hidden lg:flex justify-center items-center gap-20">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-semibold text-sm cursor-pointer
                            ${active === nav.title ? 'text-amber-400' : 'text-white'}
                        `} 
                        onClick={() => setActive(nav.title)}>
                            <a className="hover:drop-shadow-[0_0_10px_rgba(18,255,255,0.9)] ease-out duration-400" href={`#${nav.id}`}>{nav.title}<select></select></a>
                        </li>
                    ))}

                    <Trial />
                    <Book />
                </ul>
                <div className="flex lg:hidden">
                    <img className="w-5 text-white" src={toggle ? close : menu} alt="menu and close Icons" onClick={() => seToggle(!toggle)} />
                </div>
            </ul>

            <div className={`${!toggle?"hidden":"flex"} flex-col lg:hidden fixed left-0 top-0 bg-black h-full w-[50%] z-10 px-20 py-20`}>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-[15px] mb-5
              ${active === nav.title ? "text-amber-400" : "text-gray-300"}
               ${index === navLinks.length - 1 ? "mr-0":"mr-10"}
              `}
                        onClick={() => {
                            setActive(nav.title);
                            seToggle(false);
                        }}
                    >
                        <a href={`#${nav.id}`}>{nav.title}<select></select></a>
                    </li>
                ))}
            </div>
        </nav>
    )
}

export default Navbar