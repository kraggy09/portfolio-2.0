import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const Random = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <section
      className={`border row-span-4 rounded-3xl flex justify-center items-center ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-labelledby="contact-header"
      id="random"
    >
      <h2 id="contact-header">Contact</h2>
    </section>
  );
};

export default Random;
