import React from "react";
import { useTimer } from "react-timer-hook";

const MyTime = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,

    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <>
      <div>
        <div className="flex  gap-1">
          <div className="text-center w-[50px] h-[50px] bg-green text-white rounded-full p-2">
            <p className="text-sm font-medium leading-4 font-Rubik">{days}</p>
            <p className="text-[6px]">days</p>
          </div>

          <div className="text-center w-[50px] h-[50px] bg-green text-white rounded-full p-2">
            <p className="text-sm font-medium leading-4 font-Rubik">{hours}</p>
            <p className="text-[6px]">hours</p>
          </div>
          <div className="text-center w-[50px] h-[50px] bg-green text-white rounded-full p-2">
            <p className="text-sm font-medium leading-4 font-Rubik">
              {minutes}
            </p>
            <p className="text-[6px]">minutes</p>
          </div>
          <div className="text-center w-[50px] h-[50px] bg-green text-white rounded-full p-2">
            <p className="text-sm font-medium leading-4 font-Rubik">
              {seconds}
            </p>
            <p className="text-[6px]">Second</p>
          </div>
        </div>

        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            days.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        ></button>
      </div>
    </>
  );
};

export default MyTime;
