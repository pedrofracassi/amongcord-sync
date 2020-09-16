import React from 'react'
import styled from 'styled-components'

const ConnectionStatusText = styled.p`
  font-family: 'Poppins';
  font-size: 14px;
  text-transform: uppercase;
  vertical-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #6ACC86;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`

const YellowDot = styled(Dot)`
  background-color: #E0E05B;
`

export default function ConnectionStatus ({ channelName, reconnecting }) {
  return (
    <ConnectionStatusText>
      { reconnecting ? (
        <div>
          <YellowDot/> Reconnecting...
        </div>
      ) : (
        <div>
          <Dot/> Connected to <b>{channelName}</b>
        </div>
      ) }
    </ConnectionStatusText>
  )
}