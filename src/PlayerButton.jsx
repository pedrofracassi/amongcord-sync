import React from 'react'
import styled from 'styled-components'
import PlayerIcon from './PlayerIcon'

const backgroundColors = {
  black: '#72808B',
  cyan: '#68B4A7',
  green: '#4E885D',
  orange: '#E2A45B',
  pink: '#F59CD8',
  purple: '#A171DF',
  yellow: '#E0E05B',
  lime: '#90DB84',
  red: '#DD6867',
  white: '#B3BED2',
  brown: '#A07E58',
  blue: '#576AD4'
}

const PlayerButtonWrapper = styled.button`
  font-family: 'Poppins';
  font-weight: bold;
  color: white;
  border: none;
  outline: white;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 80px;
  width: calc(50% - 5px);
`

export default function PlayerButton ({ player, loading, sendAliveUpdate }) {
  const ColoredPlayerButton = styled(PlayerButtonWrapper)`
    background-color: ${backgroundColors[player.color]};
    filter: ${player.alive ? '' : 'brightness(0.6)'};
  `

  return (
    <ColoredPlayerButton disabled={loading} onClick={() => { sendAliveUpdate(player.color, !player.alive) }}>
      <PlayerIcon player={player} />
      <div>{player.name}</div>
    </ColoredPlayerButton>
  )
}