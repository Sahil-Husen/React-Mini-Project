import React, { useRef, useState } from "react";
import { IoMdPause } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";

function App() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const intervalRef = useRef();
  const formatDate = (time) => {
    const minute = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const miliseconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);

    const seconds = `0${Math.floor((time % 10000) / 10)}`.slice(-2);
    return `${minute}:${seconds}:${miliseconds}  `;
  };

  const handleToggle = () => {
    if (pause) {
      clearInterval(intervalRef.current);
      setPause(false);
    } else {
      setPause(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 200);
      }, 200);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setPause(true);
    setTime(0);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className=" relative h-[60vh] flex flex-col items-center justify-center rounded-lg w-[25vw] shadow-2xl border-0 border-black">
        <button
          onClick={handleReset}
          className="absolute top-0 right-10 text-xl"
        >
          <GrPowerReset />
        </button>
        <div className="h-[40vh] flex items-center justify-center w-[40vh] bg-[#FAFA33] rounded-full ">
          <div className="font-semmibold text-4xl">{formatDate(time)}</div>
        </div>
        <button
          onClick={handleToggle}
          className=" mt-10 flex items-center justify-center shadow-lg h-[50px] w-[50px] rounded-full bg-slate-300"
        >
          {pause ? <CiPlay1 /> : <IoMdPause />}
        </button>
      </div>
    </div>
  );
}

export default App;
