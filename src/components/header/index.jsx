import React from 'react'
import styled from 'styled-components'
import RestingBombsDisplay from '../restingBombsDisplay'

const StyledHeader = styled.header`
  background: var(--color-quaternary);
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Header() {
  return (
    <StyledHeader>
      <RestingBombsDisplay />
    </StyledHeader>
  )
}