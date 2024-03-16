import React, { useState } from "react";
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";
import a6 from "../../assets/a6.jpg";

export const GamePage = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [numer, setNumer] = useState(null);
  const [img, setimg] = useState(a6);
  const [warn, setWarn] = useState("hidden");

  const selectNumbers = [1, 2, 3, 4, 5, 6];
  const imgArr = ["=>", a1, a2, a3, a4, a5, a6];

  const diceHandler = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    console.log("the random number is ", randomNumber);

    if (randomNumber === numer) {
      setTotalScore((prev) => prev + numer);

      setNumer(null);
    } else {
      setTotalScore((prav) => {
        if (prav >= 1) prav + numer;
        return prav;
      });
      setNumer(null);
    }

    setimg(imgArr[randomNumber]);
    if (!numer) setWarn(" ");
    setWarn(hidden);
  };

  return (
    <>
      <section className=" h-full w-full  flex flex-col  justify-around  items-center">
        <section className=" border border-black  flex  justify-between h-48 w-4/5 p-3 rounded-lg">
          <div className=" flex flex-col justify-center items-center h-full w-52">
            <h1 className="text-6xl font-medium">
              {totalScore > 0 ? totalScore : 0}
            </h1>
            <h1 className=" text-2xl font-bold">Total Score</h1>
          </div>
          <div className=" flex   flex-col  items-end h-full w-2/4">
            {/* <h1 className={` ${warn} text-xl  text-red-800 ">`}>
              Select a number first !!!
            </h1> */}
            <div className=" flex gap-6">
              {selectNumbers.map((number) => (
                <div
                  key={number}
                  className={`  ${
                    number === numer ? "text-white bg-black" : ""
                  }  rounded-lg    shadow-md  transition-all border  border-black w-12 h-12 flex justify-center items-center`}
                  onClick={() => {
                    setNumer(number);
                    setWarn(hidden);
                    console.log("selected Number", number);
                  }}
                >
                  {number}
                </div>
              ))}
            </div>

            <h1 className="text-2xl font-bold"> Select Number</h1>
          </div>
        </section>
        <div>
          <section className="  w-52  h-82 flex flex-col items-center justify-between">
            <div onClick={diceHandler} className="   rounded-md w-52  h-48 ">
              <img className=" h-full w-full " src={img} alt="" />
            </div>

            <h1 className="text-white font-medium ">
              Click on the Dice to roll
            </h1>
            <div className=" ">
              <button className="  mb-3 border border-black p-2   pl-2 pr-2   w-52 text-black bg-white rounded-md">
                Reset Score
              </button>
              <button className="  p-2   pl-2 pr-2   w-52 text-white bg-black rounded-md">
                Show Rules
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
