import React from 'react'

import Title from './Title'
import CodeInput from './CodeInput';
import ConnectButton from './ConnectButton';
import VerticalContainer from './VerticalContainer';

function CodePage ({ syncId, setSyncId, connectToGame }) {
  return (
    <VerticalContainer centerVertically>
      <Title className='title'/>
      <div>
        <CodeInput syncId={syncId} setSyncId={setSyncId} />
        <ConnectButton  syncId={syncId} connectToGame={connectToGame} />
      </div>
    </VerticalContainer>
  )
}

export default CodePage;
