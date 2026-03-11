import Expert from "./Expert";
import img from "../assets/img.png";

const Hero = () => {
  return (
    <div>
      <div className="grid place-self-center items-center max-w-290 gap-1 py-20 px-10
      grid-cols-1
      md:grid-cols-1 md:px-20
      lg:grid-cols-2
      ">
        <div>
          <p className="font-bold text-3xl text-white">
            Collect, Connect and Protect <br /> Your Data
          </p>
          <p className="text-sm py-5 text-white md:text-xl lg:text-sm">
            Effortlessly create forms, integrate data, automate processes and protect <br /> sensitive information with 
            FormAssembly-A trusted solution for your data collection
          </p>
          <div>
            <Expert />
          </div>
        </div>
        <div className="p-0.5 bg-white rounded-sm relative">
          <img className="w-full rounded-sm" src={img} alt="image" />
          <p className="bg-white rounded-sm w-30 text-center text-sm absolute left-0 bottom-0">3 mins overview</p>
        </div>
      </div>
    </div>
  )
}

export default Hero