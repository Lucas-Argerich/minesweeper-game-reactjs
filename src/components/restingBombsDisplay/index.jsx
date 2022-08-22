import React from 'react'
import styled from 'styled-components'
import Number from '../number'

const StyledRestingBombsDisplay = styled.div`
  background: var(--color-tertiary);
  min-height: 40px;
  display: flex;
  align-items: center;
`

export default function RestingBombsDisplay() {
  return (
    <StyledRestingBombsDisplay>
      <Number number={0}/>
      <Number number={0}/>
      <Number number={0}/>
    </StyledRestingBombsDisplay>
  )
}
