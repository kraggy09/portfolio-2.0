import { useParams } from "react-router-dom";
import ProjectStack from "../components/ProjectStack";
import ProjectDesc from "../components/ProjectDesc";

const Works = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <main className="relative lg:p-3 p-2 flex items-center justify-center transition duration-500 ease-in min-h-screen w-full overflow-hidden">
      <article className="relative h-full flex items-center justify-start flex-col w-full gap-4 border-2 border-gray-400 rounded-3xl min-h-[95vh] p-2 lg:p-5">
        <div className="my-12 ">X</div>
        <section>
          <div className="grid lg:gap-x-9  md:max-w-[90vw] gap-y-6 md:gap-y-0  gap-x-12 md:grid-cols-5 lg:grid-cols-3">
            <header className="md:col-span-5 lg:col-span-3 md:my-6">
              <h1 className="text-3xl font-bold ">Cashless</h1>
              <h2 className="uppercase text-gray-400 text-lg  tracking-widest">
                Web App
              </h2>
            </header>
            <ProjectStack />
            <ProjectDesc />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Works;
