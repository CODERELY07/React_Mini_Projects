import { Hand, Heart } from "lucide-react";
import React, { useState } from "react";
import  {motion}  from "framer-motion";
import CodeDisplay from "../../components/CodeDisplay";
import { challenge1 } from "../../data/challengeCode/challenge1";
import InstallComponent from "../../components/InstallComponent";

const Task = () => {
  return (
    <div className="max-w-[1200px] w-full bg-white p-8 rounded-2xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🛠️ Your Task</h1>
      <p className="text-gray-800 text-lg">
        Build a small React app with the following features:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
        <li>
          <strong>Greeting Message</strong>
          <br />
          <p className="ml-4">Display: "Hello, [name]!" using a name prop.</p>
        </li>
        <li>
          <strong>Profile Card</strong>
          <br />
          <p className="ml-4">
            Show the user’s avatar, full name, and a short bio.
          </p>
          <p className="ml-4">You can hardcode this data using JSX.</p>
        </li>
        <li>
          <strong>Hobbies List</strong>
          <br />
          <p className="ml-4">
            Display a list of hobbies (like reading, swimming, gaming).
          </p>
          <p className="ml-4">
            Pass hobbies as a prop (array) and render them dynamically using
            .map().
          </p>
        </li>
        <li>
          <strong>Heart Toggle</strong>
          <br />
          <p className="ml-4">
            A heart icon/button that toggles between ❤️ and 🤍 when clicked.
          </p>
          <p className="ml-4">Use useState to track whether it’s "liked".</p>
        </li>
        <li>
          <strong>Click Counter</strong>
          <br />
          <p className="ml-4">
            A button that says: "Clicked X times" and increases the number on
            every click.
          </p>
          <p className="ml-4">Use useState to track clicks.</p>
        </li>
      </ul>
    </div>
  );
};
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
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center p-6">
      <Task />
      <div className="max-w-[1200px] mt-5 w-full bg-white p-8 rounded-2xl shadow-lg space-y-6">
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
          <InstallComponent datas={['npm install lucide', 'npm install motion']}/>
          <h2>Code:</h2>
          <CodeDisplay code={challenge1} />

      </div>

    </div>
  );
};

export default Challenge1;
