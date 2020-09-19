import React from 'react'

import Title from './Title'
import CodeInput from './CodeInput';
import ConnectButton from './ConnectButton';
import VerticalContainer from './VerticalContainer';
import DiscordButton from './DiscordButton';
import PatreonButton from './PatreonButton';

function CodePage ({ syncId, setSyncId, connectToGame, loading }) {
  return (
    <VerticalContainer centerVertically>
      <Title className='title'/>
      <div>
        <CodeInput syncId={syncId} setSyncId={setSyncId} />
        <ConnectButton loading={loading} syncId={syncId} connectToGame={connectToGame} />
        <DiscordButton/>
        <PatreonButton/>
      </div>
    </VerticalContainer>
  )
}

export default CodePage;
