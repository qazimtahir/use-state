"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [result, setResult] = useState(0);
  function increase() {
    result = result + 1;
    if(result>20){alert("Maximum allowed value is 20")}
    if(result>20){result=20}
    setResult(result);
  }
  function decrease() {
    result = result - 1;
    if(result<0){alert("Minimum allowed value is 0")}
    if(result<0){result=0}
    setResult(result);
  }
  return (
    <>
      <div className="flex justify-center text-yellow-400 bg-slate-600 h-16 items-center">
        <h1 className="text-6xl">useState</h1>
      </div>

      <div className="flex justify-center align-middle h-24 border-solid border-4 border-purple-700 gap-10 pt-6" >
        <button
          className=" border-gray-500 border-2 p-4 flex items-center justify-center h-10 rounded-full bg-blue-700 text-yellow-100 hover:bg-blue-300"
          onClick={increase}
        >
          Increase +
        </button>
        <button
          className="border-gray-500 border-2 p-4 flex items-center justify-center h-10 rounded-full bg-red-700 text-yellow-100 hover:bg-red-300"
          onClick={decrease}
        >
          Decrease -
        </button>
      </div>

      <div className="flex justify-center align-middle">
        <h1 className="text-8xl text-blue-800 hover:text-purple-600 hover:cursor-pointer">Total = {result}</h1>
      </div>
      
      <div>
      <h2 className="text-red-400 flex items-center justify-center mt-12 text-4xl">Note: Maximum = 20, Minimum = 0</h2>
      </div>

      <div>
      <h2 className="text-green-800 flex items-center justify-center mt-12 text-4xl">Once again total = {result}</h2>
      </div>

      <div>
      <h2 className="text-gray-400 flex items-center justify-center mt-12 text-4xl">Muhammad Tahir Iqbal</h2>
      <div>
      <h2 className="text-red-400 flex items-center justify-center mt-4 text-xl">PIAIC Badge-52, Lahore</h2>
      </div>

      <div>
      <h2 className="text-pink-800 flex items-center justify-center mt-4 text-xs">Monday May 6, 2024</h2>
      </div>

      </div>
    </>
  );
}
