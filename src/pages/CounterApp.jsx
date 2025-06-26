import React from 'react';
import { useState } from 'react';

const CounterTimes = ({ counterTimes, setCounterTimes }) => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex items-center space-x-3 my-4">
      <label htmlFor="countertimes" className="font-semibold">
        Select Counter Step:
      </label>
      <select
        id="countertimes"
        className="p-2 rounded border border-gray-300"
        value={counterTimes}
        onChange={(e) => setCounterTimes(Number(e.target.value))}
      >
        {options}
      </select>
    </div>
  );
};

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [counterTimes, setCounterTimes] = useState(1);
  const [textError, setTextError] = useState('');

  const max = 20;
  const min = 0;

  const showError = (message) => {
    setTextError(message);
    setTimeout(() => setTextError(''), 3000);
  };

  const increaseCounter = () => {
    const next = counter + counterTimes;
    if (next > max) {
      showError(`Max is ${max}. Adding ${counterTimes} to ${counter} = ${next}`);
      return;
    }
    setCounter(next);
  };

  const decreaseCounter = () => {
    const next = counter - counterTimes;
    if (next < min) {
      showError(`Min is ${min}. Subtracting ${counterTimes} from ${counter} = ${next}`);
      return;
    }
    setCounter(next);
  };

  const resetCounter = () => {
    setCounter(0);
    setTextError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold uppercase mb-4">Counter App</h1>
        <p className="text-[80px] font-bold text-blue-600 mb-4">{counter}</p>

        <CounterTimes counterTimes={counterTimes} setCounterTimes={setCounterTimes} />

        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={decreaseCounter}
            disabled={counter <= min}
            className={`p-3 w-20 text-white text-3xl rounded ${
              counter <= min ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            -
          </button>
          <button
            onClick={resetCounter}
            className="p-3 w-20 bg-green-500 text-white text-xl rounded hover:bg-green-600"
          >
            Reset
          </button>
          <button
            onClick={increaseCounter}
            disabled={counter >= max}
            className={`p-3 w-20 text-white text-3xl rounded ${
              counter >= max ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            +
          </button>
        </div>

        {textError && <p className="text-red-500 font-medium">{textError}</p>}
      </div>
    </div>
  );
}

export default CounterApp
