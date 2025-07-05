export const challenge1 = 
`
import { Hand, Heart } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const GreetingMessage = ({ name }) => {
  return (
    <>
      <h3> Hello, {name}</h3>
    </>
  );
};

const ProfileCard = () => {
  return (
    <div className="flex space-x-3">
      <img src="/img/avatar.jpg" alt="Avatar" className="w-20" />
      <div className="mt-2">
        <p>Jhon Smith</p>
        <p>Full Stack developer</p>
      </div>
    </div>
  );
};

const HobbiesList = ({ hobbies }) => {
  return (
    <>
      <ul>
        <h3 className="font-bold">My Hobbies</h3>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

const Challenge1 = () => {

  const [heart, setHeart] = useState(false);
  const [poke, setPoke] = useState(0);

  const heartToggle = () => {
    setHeart(prev => !prev);
  };

  const addPoke = () => {
    setPoke(prev => prev + 1);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Task />
      <div className="max-w-2xl mt-5 w-full bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1>Output:</h1>
        <GreetingMessage name="Mark Ely" />
        <div className="shadow-lg p-3 flex flex-col gap-3 rounded-2xl ">
          <ProfileCard />
          <HobbiesList hobbies={["Swimming", "Walking"]} />
          <div className="flex space-x-2">
            <motion.div
              whileTap={{ scale: 1.4, rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
               <Heart fill={heart ? "red" : "none"} onClick={heartToggle} className="cursor-pointer"/>
            </motion.div>
  
           <motion.div
              whileTap={{ scale: 1.4, rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Hand
                className="cursor-pointer text-blue-500"
                onClick={addPoke}
              />
              
            </motion.div>
            {poke}
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default Challenge1;


`