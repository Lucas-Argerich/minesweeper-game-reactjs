import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { MinesContext } from "../../context";

const Border = styled.div`
  border: 1px solid var(--color-secondary);
  max-width: 40px;
  max-height: 40px;
  ${({ dimensions }) => `width: calc(100% / ${dimensions.x})`}
`;

const StyledCell = styled.div`
  background: var(--color-quaternary);
  border: 5px solid var(--color-shade);
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default function Cell(props) {
  const { dimensions } = useContext(MinesContext);
  const [hasBomb, setHasBomb] = useState(false);

  useEffect(() => {
    setHasBomb(props.hasBomb);
  }, []);

  const handleClick = (e) => {
    if (e.button === 0 && hasBomb) {
      console.log("Explode!");
      //explode!
    }
    if (e.button === 0 && !hasBomb) {
      console.log("Uncover");
      //uncover
    }
    if (e.button === 2) {
      console.log("Flag");
      //set flag
    }
  };

  return (
    <Border
      onClick={handleClick}
      onContextMenu={handleClick}
      dimensions={dimensions}
    >
      <StyledCell style={hasBomb ? { background: "red" } : {}}></StyledCell>
    </Border>
  );
}
