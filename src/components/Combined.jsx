import AboutHolder from "./AboutHolder";
import BestWork from "./BestWork";
import Stack from "./Stack";

const Combined = () => {
  return (
    <div className="grid col-span-1 grid-cols-1 gap-y-3 md:gap-y-6 md:min-h-[100vh] min-h-[150vh] grid-rows-8 xl:grid-rows-7">
      <div className="row-span-5  xl:row-span-5 grid-cols-1  grid gap-y-3 grid-rows-7">
        <BestWork />
        <Stack css="lg:row-span-3  row-span-2 flex justify-center  px-8  py-8 rounded-3xl" />
        <div className="row-span-1 bg-red-400"></div>
      </div>
      <AboutHolder />
    </div>
  );
};

export default Combined;
