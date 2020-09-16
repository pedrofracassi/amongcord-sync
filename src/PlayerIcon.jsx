import React from 'react'
import styled from 'styled-components'

const PlayerIconWrapper = styled.img`
  height: 35px;
`

export default function PlayerIcon ({ player }) {
  return <PlayerIconWrapper src={`crewmates/${player.color}${player.alive ? '' : '_dead'}.png`} alt={player.color}/>
}