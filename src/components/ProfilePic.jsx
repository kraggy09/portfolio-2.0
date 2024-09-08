import { useContext } from "react";
import { BgContext } from "../context/BgContext";

const ProfilePic = () => {
  const { colorScheme } = useContext(BgContext);
  return (
    <div
      aria-label="Website Author Photo"
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/a/ACg8ocKTZ55merox7A6INcTdRruPq0MZCRBPVhZiiEFcZym0RbjG_Q1C_Q=s288 ")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="profile-pic"
      className={`border col-span-3 row-span-4 rounded-3xl flex justify-center items-center   ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text}  ${colorScheme.bgopacity} ${colorScheme.text}`}
    >
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocKTZ55merox7A6INcTdRruPq0MZCRBPVhZiiEFcZym0RbjG_Q1C_Q=s288"
        alt="Kaif Shaikh"
        className="hidden"
      />
    </div>
  );
};

export default ProfilePic;
