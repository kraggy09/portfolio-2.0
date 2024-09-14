import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Exp2 = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <div
      className={`relative row-span-2 border px-8 col-span-1 py-8 rounded-3xl overflow-hidden ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}`}
    >
      <h2 className="uppercase text-gray-400 text-sm py-3 tracking-widest">
        Experience
      </h2>
      <div className="flex gap-y-4 my-6 flex-col ">
        <div className="grid grid-cols-3 grid-rows-1">
          <p className="col-span-2">
            Software Dev Intern at{" "}
            <a
              href="https://www.intervue.io"
              target="_blank"
              className="border-b-2 ml-2 font-semibold"
            >
              Intervue.io
            </a>
          </p>
          <p className="text-right text-gray-300"> Current</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-1">
          <p className="col-span-2">
            Software Dev Intern at
            <a
              href="https://www.simcoconsultancy.com/"
              target="_blank"
              className="border-b-2 ml-2 font-semibold"
            >
              Simco Consultancy
            </a>
          </p>
          <p className="text-right text-gray-300">Jul&apos;24 - Oct&apos;24</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-1">
          <p className="col-span-2 font-semibold">Freelance</p>
          <p className="text-right text-gray-300">Jul&apos;24 - Oct&apos;24</p>
        </div>
      </div>
    </div>
  );
};

export default Exp2;
