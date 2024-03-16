import React from "react";
import mainDice from "../../assets/mainDice.png";

const Home = () => {
  return (
    <>
      <section className=" h-1/2  w-3/4 flex  items-center justify-center">
        <div className="  h-full w-1/2  flex justify-center  items-center">
          <img className=" w-10/12" src={mainDice} alt="mainDice" />
        </div>
        <dir className="h-full  flex flex-col  justify-center items-end   ">
          <h1 className=" text-7xl  font-extrabold mb-3">Dice Game</h1>

          <button className="      p-2   pl-2 pr-2   w-52 text-white bg-black rounded-md">
            {" "}
            let's Play{" "}
          </button>
        </dir>
      </section>
    </>
  );
};

export default Home;
