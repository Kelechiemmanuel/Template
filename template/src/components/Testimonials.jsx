import Amazon from "../assets/Amazon.png";
import Dell from "../assets/Dell.png";
import southwest from "../assets/southwest.png";
import harvard from "../assets/harvard.png";
import Lendingtree from "../assets/Lendingtree.png"

const Testimonials = () => {
    const slide = [southwest, Amazon, harvard, Dell, Lendingtree, Amazon];
    return (
        <div className="flex flex-col overflow-hidden w-full bg-white py-6">
            <div className="text-center py-10">
                 <h2 className="font-bold text-sm">OVER 5,500 ORGANIZATION TRUST FORMASSEMBLY WITH THEIR DATA</h2>
            </div>
            <div className="relative">
                <div className="flex slide-track gap-10">
                    {slide.concat(slide).map((logo, i) => (
                        <div key={i} className="flex shrink-0 w-40 items-center justify-center">
                            <img className="w-50 h-10" src={logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center py-15">
                <p className="text-xl">No data collection strategy</p>
                <p className="py-5 font-bold text-xl text-blue-950">You're losing more than you think</p>
            </div>
        </div>
    )
}

export default Testimonials