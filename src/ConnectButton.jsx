import React from 'react'

import { syncIdLength } from './config.json'
import Button from './Button'
import styled from 'styled-components'

const ConnectButtonWrapper = styled(Button)`
  width: 100%;
`

export default function ConnectButton ({ syncId, connectToGame, loading }) {
  return (
    <ConnectButtonWrapper disabled={(syncId || '').length !== syncIdLength || loading} onClick={connectToGame}>Connect</ConnectButtonWrapper>
  )
}