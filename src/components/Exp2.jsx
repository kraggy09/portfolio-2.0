import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Exp2 = () => {
  const { colorScheme } = useContext(BgContext);

  const experiences = [
    {
      company: "Intervue.io",
      role: "Software Dev Intern",
      website: "https://www.intervue.io",
      start: "Current",
      end: "",
    },
    {
      company: "Simco Consultancy",
      role: "Software Dev Intern",
      website: "https://www.simcoconsultancy.com/",
      start: "Jul'24",
      end: "Oct'24",
    },
    {
      company: "Freelance",
      role: "Freelance Developer",
      website: "",
      start: "Sep'23",
      end: "Jul'24",
    },
  ];

  return (
    <div
      className={`relative row-span-2 border px-8 col-span-1 py-8 rounded-3xl overflow-hidden ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity}`}
    >
      <h2 className="uppercase text-gray-400 text-sm py-3 tracking-widest">
        Experience
      </h2>
      <div className="flex gap-y-4 my-6 flex-col">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-3 grid-rows-2 md:grid-rows-1"
          >
            <p className="col-span-3 md:col-span-2 row-span-1 md:row-span-2">
              {index !== experiences.length - 1 && `${exp.role} at `}
              {exp.website ? (
                <a
                  href={exp.website}
                  target="_blank"
                  className="border-b-2  font-semibold"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="font-semibold">{exp.company}</span>
              )}
            </p>
            <p className="text-left row-span-1 col-span-3 md:col-span-1 md:row-span-2 md:text-right text-gray-300">
              {exp.start} {exp.end && ` - ${exp.end}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exp2;
