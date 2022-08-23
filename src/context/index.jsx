import React, { createContext, useState, useEffect } from "react";

export const MinesContext = createContext();

export const MinesProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({ x: 32, y: 32 });
  const [targetBombs, setTargetBombs] = useState(256);
  const [generatedBombs, setGeneratedBombs] = useState(0);
  const [array, setArray] = useState([]);

  const generateBomb = () => {
    return Math.random() < targetBombs / (dimensions.x * dimensions.y);
  };

  const amountOfBombs = () => {
    let count = 0
    array.map((_, i) => {
      array[i].map((bomb) => {
        bomb && count++
      });
    });
    setGeneratedBombs(count)
  };

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < dimensions.y; i++) {
      arr.push([]);
      for (let j = 0; j < dimensions.x; j++) {
        arr[i][j] = generateBomb();
      }
    }
    setArray(arr);
  }, []);

  useEffect(() => {
    console.log(array);
    amountOfBombs()
  }, [array]);

  useEffect(() => {
    console.log("bombs:", generatedBombs);
  }, [generatedBombs]);

  return (
    <MinesContext.Provider
      value={{
        dimensions,
        setDimensions,
        targetBombs,
        setTargetBombs,
        generatedBombs,
        setGeneratedBombs,
        array,
        setArray,
      }}
    >
      {children}
    </MinesContext.Provider>
  );
};
