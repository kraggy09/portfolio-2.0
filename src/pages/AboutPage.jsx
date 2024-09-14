import Experience from "../components/Experience";

const AboutPage = () => {
  return (
    <div className="relative lg:p-3 p-2 flex items-center justify-center transition duration-500 ease-in min-h-screen w-full overflow-hidden">
      <div className="relative  h-full flex items-center  flex-col w-full gap-4 border-2 border-gray-400 rounded-3xl min-h-[95vh] p-2 lg:p-5">
        <div className="my-12   ">X</div>
        <div className="grid gap-x-9 grid-cols-2">
          <Experience />
          <div>Second</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
