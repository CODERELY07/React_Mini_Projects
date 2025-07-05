import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  return (
    <Link to={`./../challengepage/${data.id}`}>
      <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
        <h1 className="text-lg font-medium mb-2 text-green-600">
          {data.level}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          {data.title}
        </h2>
        <p className="text-base mb-4">{data.description}</p>
        <div className="flex justify-between">
          <span className="text-sm italic text-blue-500">
            Example: {data.example}
          </span>
          <span className="text-sm font-medium text-orange-500">
            {data.practice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
