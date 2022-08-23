import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Border = styled.div`
  border: 1px solid var(--color-secondary);
  width: 40px;
  height: 40px;
`;

const StyledCell = styled.div`
  background: var(--color-quaternary);
  border: 5px solid var(--color-shade);
  width: 100%;
  height: 100%;
`;

export default function Cell(props) {
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
    <Border onClick={handleClick} onContextMenu={handleClick}>
      <StyledCell style={hasBomb ? { background: "red" } : {}}></StyledCell>
    </Border>
  );
}
