import React from 'react'
import styled from 'styled-components'

import PlayerButton from './PlayerButton';
import ConnectionStatus from './ConnectionStatus'
import Button from './Button'
import Container from './Container';
import JoinTipCard from './JoinTipCard';

const TopIcon = styled.img`
  height: 55px;
  margin-top: 25px;
`

const FullButton = styled(Button)`
  width: 100%;
`

const HalfButton = styled(Button)`
  width: calc(50% - 5px);
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PlayerContainer = styled(FlexContainer)`
  flex-wrap: wrap;
`

const TopBar = styled.div`
  align-items: center;
`

function GamePage ({ gameState, sendStageUpdate, sendAliveUpdate, loading, reconnecting }) {
  return (
    <Container>
      <TopBar>
        <TopIcon src='icon.png' alt='Amongcord Icon'/>
      </TopBar>
      <ConnectionStatus reconnecting={reconnecting} channelName={gameState.channel_name} />
      <FullButton disabled={gameState.game_stage === 'lobby' || loading} onClick={() => { sendStageUpdate('lobby') }}>Lobby</FullButton><br/>
      <FlexContainer>
        <HalfButton disabled={gameState.game_stage === 'tasks' || loading} onClick={() => { sendStageUpdate('tasks') }}>Tasks</HalfButton>
        <HalfButton disabled={gameState.game_stage === 'discussion' || loading} onClick={() => { sendStageUpdate('discussion') }}>Discussion</HalfButton>
      </FlexContainer>
      <section>
        <h2>Players</h2>
        { gameState.players.length > 0 ? (
          <PlayerContainer>
            {gameState.players.map(p => (
              <PlayerButton player={p} loading={loading} sendAliveUpdate={sendAliveUpdate} />
            ))}
          </PlayerContainer>
        ) : (
          <JoinTipCard />
        ) }
      </section>
    </Container>
  );
}

export default GamePage;
