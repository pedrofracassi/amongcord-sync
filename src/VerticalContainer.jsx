import React from 'react'
import styled from 'styled-components';

const ExternalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const InternalContainer = styled.div`
  margin-right: 25px;
  margin-left: 25px;
  text-align: center;
  align-self: center;
  width: 100%;
  max-width: 330px;
`

export default function VerticalContainer ({ children }) {
  return (
    <ExternalContainer key="external">
      <InternalContainer key="internal">
        {children}
      </InternalContainer>
    </ExternalContainer>
  )
}