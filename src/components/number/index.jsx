import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledNumber = styled.div`
  width: 18px;
  height: 33px;
  margin-inline: 3px;
`;

const Positioning = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VerticalLine = styled.div`
  width: 3px;
  height: 10px;
  background: var(--color-tertiary);
  margin-block: 1px;
  ${props => props.enabled && `background: var(--color-primary)`}
`;

const HorizontalLine = styled.div`
  width: 10px;
  height: 3px;
  background: var(--color-tertiary);
  margin-inline: auto;
  ${props => props.enabled && `background: var(--color-primary)`}
`;

export default function Number(props) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(props.number || 0);
  }, [props.number]);

  return (
    <StyledNumber>
      <HorizontalLine enabled={number === 0 ||number === 2 || number === 3 || number === 5 || number === 6 || number === 7 || number === 8 || number === 9}/>
      <Positioning>
        <VerticalLine enabled={number === 0 || number === 4 || number === 5 || number === 6 || number === 8 || number === 9}/>
        <VerticalLine enabled={number === 0 || number === 1 || number === 2 || number === 3 || number === 4 || number === 7 || number === 8 || number === 9}/>
      </Positioning>
      <HorizontalLine enabled={number === 2 || number === 3 || number === 4 || number === 5 || number === 6 || number === 8 || number === 9}/>
      <Positioning>
        <VerticalLine enabled={number === 0 || number === 2 || number === 6 || number === 8} />
        <VerticalLine enabled={number === 0 || number === 1 || number === 3 || number === 4 || number === 5 || number === 6 || number === 7 || number === 8 || number === 9}/>
      </Positioning>
      <HorizontalLine enabled={number === 0 || number === 2 || number === 3 || number === 5 || number === 6 || number === 8}/>
    </StyledNumber>
  );
}
