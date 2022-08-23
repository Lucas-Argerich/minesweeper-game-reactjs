import React, { useContext } from "react";
import styled from "styled-components";
import Number from "../number";
import { MinesContext } from "../../context";

const StyledRestingBombsDisplay = styled.div`
  background: var(--color-tertiary);
  min-height: 40px;
  display: flex;
  align-items: center;
`;

export default function RestingBombsDisplay() {
  const { generatedBombs } = useContext(MinesContext);
  return (
    <StyledRestingBombsDisplay>
      <Number number={Math.floor(generatedBombs / 100) % 10} />
      <Number number={Math.floor(generatedBombs / 10) % 10} />
      <Number number={generatedBombs % 10} />
    </StyledRestingBombsDisplay>
  );
}
