import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #E6EAF1;
  color: #3A3B3C;
  padding: 15px;
  border-radius: 5px;
`

const Code = styled.code`
  background-color: #CFD5E4;
  padding: 3px;
  border-radius: 5px;
  font-weight: 600;
`

const Small = styled.div`
  font-size: 0.9em;
  color: #6B6C6D;
`

export default function JoinTipCard () {
  return (
    <Wrapper>
      <b>There are no players in this game.</b>
      <br/>
      <Small>Join it by typing <Code>,join</Code> on a text channel.</Small>
    </Wrapper>
  )
}