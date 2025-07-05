import React from 'react';
import { useParams } from 'react-router-dom';
import challenges from '../data/challenges';
import Challenge1 from './challenges/challenge1';

const componentMap = {
  Challenge1: Challenge1,
};

const ChallengePage = () => {
  const { id } = useParams();
  const challenge = challenges.find(c => c.id === Number(id));

  if (!challenge) return <div>Challenge not found</div>;

  const Component = componentMap[challenge.componentName];

  if (!Component) return <div>Component not found</div>;

  return (
    <div className="p-4">
      <Component />
    </div>
  );
};

export default ChallengePage;
