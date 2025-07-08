import React from "react";
import challenges from "../data/challenges";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";

const ChallengeList = () => {
  return (
    <div className="min-h-screen flex  justify-center">
      <div className=" bg-gradient-to-br from-blue-100 to-purple-200 p-10 rounded-2xl shadow-xl w-full max-w-full text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
          My Daily Challenge Progress
        </h1>
        <p className="text-base mb-8 text-gray-600">
          This is my daily challenge. I code it from scratch without using Google or AI to improve my skills. However, I ask ChatGPT to help generate the challenge, and then I incorporate my own ideas into it.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-3 lg:grid-cols-3">
            {challenges.map((data) => (
                <CardComponent data={data} key={data.id} />
            ))}
          </div>
       
      </div>
    </div>
  );
};

export default ChallengeList;
