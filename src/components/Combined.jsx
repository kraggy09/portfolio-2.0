import BestWork from "./BestWork";
import Stack from "./Stack";

const Combined = () => {
  return (
    <div className="grid col-span-1 grid-cols-1 gap-y-6  grid-rows-8">
      <div className="row-span-5  grid-cols-1  grid gap-y-3 grid-rows-5">
        <BestWork />
        <Stack css="row-span-2  flex justify-center  px-8  py-8 rounded-3xl" />
      </div>
    </div>
  );
};

export default Combined;
