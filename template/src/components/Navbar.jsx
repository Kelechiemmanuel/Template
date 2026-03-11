
import { navLinks } from "../constant";
import Trial from "./Trial";
import Book from "./Book";

const Navbar = () => {
    return (
        <nav className="">
            <ul className="flex justify-center items-center gap-20 py-10
                flex-col
                md:flex-col
                lg:flex-row
                ">
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex  justify-center items-baseline bg-white w-3 h-3 text-2xl"></div>
                        <div className="flex  justify-end items-center bg-white w-3 h-3 mt-5"></div>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl text-white">FormAssembly</h1>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center gap-20">
                    {navLinks.map((nav) => (
                        <li className="font-semibold text-sm text-white" key={nav.id}>{nav.title}<select></select></li>
                    ))}

                    <Trial />
                    <Book />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar