import { useLocation } from "react-router-dom";
import ProjectStack from "../components/ProjectStack";
import ProjectDesc from "../components/ProjectDesc";
import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Works = () => {
  const { colorScheme } = useContext(BgContext);
  const location = useLocation();
  const { state } = location;
  console.log(state);

  return (
    <main
      className={`relative lg:p-3 p-2 flex items-center justify-center transition duration-500 ease-in min-h-screen w-full overflow-hidden
      
          ${colorScheme.border} ${colorScheme.text} ${colorScheme.text}`}
    >
      <article className="relative h-full flex items-center justify-start flex-col w-full gap-4 border-2 border-gray-400 rounded-3xl min-h-[95vh] p-2 lg:p-5">
        <div className="my-12 ">X</div>
        <section className="grid grid-cols-1 gap-y-9 md:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw]">
          <div className="grid lg:gap-x-9 gap-y-6 md:gap-y-0 gap-x-12 md:grid-cols-5 lg:grid-cols-3">
            <header className="md:col-span-5 lg:col-span-3 md:my-6">
              <h1 className="text-3xl font-bold ">{state.name}</h1>
              <h2 className="uppercase text-gray-400 text-lg tracking-widest">
                {state.type}
              </h2>
            </header>
            <ProjectStack data={state} />
            <ProjectDesc data={state} />
          </div>

          <div
            className={`flex flex-col py-8 pl-6 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} gap-y-4 pr-4 rounded-3xl`}
          >
            <h1 className="text-3xl font-semibold">Problem</h1>
            <div className="leading-loose  flex flex-col gap-6 text-lg md:text-xl">
              {state.problems.map((problem, index) => {
                return (
                  <p className="text-start" key={problem}>
                    {index + 1 + ") " + problem}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="relative grid md:grid-cols-5 gap-4">
            <img
              src="/p1.jpg"
              className="rounded-3xl mx-auto w-full h-full object-cover col-span-3 row-span-4"
              alt="Main Project Image"
            />
            <img
              src="/p1.jpg"
              className="rounded-3xl mx-auto w-full h-full object-cover col-span-2 row-span-2"
              alt="Secondary Image 1"
            />
            <img
              src="/p1.jpg"
              className="rounded-3xl mx-auto w-full h-full object-cover col-span-2 row-span-2"
              alt="Secondary Image 2"
            />
          </div>

          <div
            className={`flex flex-col py-8 pl-6 ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text} gap-y-4 pr-4 rounded-3xl`}
          >
            <h1 className="text-3xl font-semibold">Solution</h1>
            <div className="leading-loose flex flex-col gap-5  text-lg md:text-xl">
              {state.solutions.map((solution, index) => {
                return (
                  <p className="text-start" key={solution}>
                    {index + 1 + ") " + solution}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Works;
