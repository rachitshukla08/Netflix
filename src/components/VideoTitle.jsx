import React, { useEffect, useRef, useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [overviewClass, setOverviewClass] = useState(
    "sm:block hidden max-w-96 mt-6 text-sm tracking-wider transition-all"
  );
  const [titleClass, setTitleClass] = useState({
    ["fontSize"]: "2.25rem",
    ["fontWeight"]: "700",
    ["maxWidth"]: "32rem",
  });
  const overviewNode = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      // setShowOverview(false);
      setOverviewClass(
        "sm:block max-w-96 mt-6 text-sm tracking-wider translate-y-40 opacity-0 overflow-hidden transition-all duration-[0.8s]"
      );
      // setTitleClass(
      //   (prev) =>
      //     prev +
      //     " text-3xl transition-all translate-y-[" +
      //     overviewNode.current.clientHeight +
      //     "rem]"
      // );
      setTitleClass({
        ...titleClass,
        transform: `translateY(${overviewNode.current.clientHeight}px)`,
        ["fontSize"]: "1.8rem",
        transition: "all 0.8s ease",
      });
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // const getOverviewClass = () => {
  //   let overviewClass =
  //     "sm:block hidden max-w-96 mt-6 text-sm tracking-wider transition-all";
  //   if (!showOverview) overviewClass += "hidden";
  //   return overviewClass;
  // };

  return (
    <div className="mx-16 mb-28 text-white font-medium">
      <h1 style={titleClass}>{title}</h1>
      <p ref={overviewNode} className={overviewClass}>
        {overview}
      </p>
      <div className="flex sm:flex-row flex-col max-w-lg gap-5 mt-6">
        <button className="bg-white text-black px-8 py-2 rounded flex flex-row items-center gap-2 hover:bg-neutral-300/90 text-xl sm:max-w-fit w-44 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M2 24v-24l20 12-20 12z" />
          </svg>
          Play
        </button>
        <button className="px-8 py-2 rounded flex text-nowrap flex-row items-center gap-2 text-white text-xl bg-neutral-700/70 hover:bg-black/60 sm:max-w-fit w-44 justify-center">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            width="18"
            height="18"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
              fillRule="nonzero"
              strokeWidth="0.5"
              stroke="white"
            />
          </svg>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
