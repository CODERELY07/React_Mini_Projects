export const challenge2 = 
`
import React, { useEffect, useState } from 'react'
import { Bookmark, BookMarked } from 'lucide-react';

const jobs = [
  {
    "id" : 1,
    "title" : "Junior Developer",
    "type" : "Web Developer",
    "isSave": false,
    "location" : "Remote",
  },
  {
    "id" : 2,
    "title" : "Senior Developer",
     "type" : "Web Developer",
      "isSave": false,
    "location" : "Pasig",
  },
  {
    "id" : 3,
    "title" : "Junior App Developer",
    "type" : "App Developer",
     "isSave": false,
    "location" : "Cavite",
  },
  {
    "id" : 4,
    "title" : "Senior App Developer",
    "type" : "App Developer",
     "isSave": false,
    "location" : "Remote",
  },
]


const Jobs = ({ filteredJobs }) => {
  return (
    <ul>
      <h1 className='font-bold text-2xl mb-2'>List of Jobs</h1>
      {filteredJobs.length === 0 ? (
        <li>No jobs found.</li>
      ) : (
        filteredJobs.map(job => (
           <Card key={job.id} job={job} />
        ))
      )}
    </ul>
  );
};


const Filter = ({handleLocation, handleType, unquieLocation, unquieType}) =>{

  return (
    <div>
      <select onChange={handleType}>
        <option value="">All</option>
        {unquieType.map((type, index) => (
          <option value={type} key={index}>{type}</option>
        ))}
     
      </select>

      <select onChange={handleLocation}>
        <option value="">All</option>
        {unquieLocation.map((type, index) => (
          <option value={type} key={type}>{type}</option>
        ))}
      
      </select>
    </div>
    
  )
}

const Card = ({ job }) => {
  const [saveJob, setSaveJob] = useState(job.isSave);
  return (
    <div className="border rounded-xl p-4 shadow-md flex items-center justify-between mb-2">
      <div>
        <h2 className="font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.type} – {job.location}</p>
      </div>
      <button onClick={() => setSaveJob(prev => !prev)}>
        <Bookmark fill={saveJob ? "black" : "none"} className={" cursor-pointer"} />
      </button>
     
    </div>
  );
};

const Challenge2 = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  // remove duplicates 
  const unquieType = [...new Set(jobs.map(job => job.type))];
  const unquieLocation = [...new Set(jobs.map(job => job.location))];

  const handleType = (e) => setType(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  const filteredJobs = jobs.filter(job => {
    const matchesType = type ? job.type === type : true;
    const matchesLocation = location ? job.location === location : true;
    return matchesType && matchesLocation;
  });


  return (
    <div>
      <Task/>
        <div className="max-w-[1200px] mt-5 w-full bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1>Output:</h1>
        <Filter 
          handleType={handleType}
          handleLocation={handleLocation}
          unquieLocation={unquieLocation}
          unquieType={unquieType}
        />
        
        <Jobs filteredJobs={filteredJobs}/>      
        </div>
    </div>
  )
}

export default Challenge2`
