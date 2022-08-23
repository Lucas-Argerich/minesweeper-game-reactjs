import React, { useContext } from "react";
import { MinesContext } from "../../context";
import styled from "styled-components";
import Cell from "../cell";

const Container = styled.div`
  overflow: scroll;
  height: calc(100vh - 50px) ;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Board() {
  const { array } = useContext(MinesContext);

  return (
    <Container>
      {array.map((_, i) => {
        return (
          <Row key={i}>
            {array[i].map((bomb, j) => (
              <Cell key={j} xValue={j} yValue={i} hasBomb={bomb} />
            ))}
          </Row>
        );
      })}
    </Container>
  );
}
