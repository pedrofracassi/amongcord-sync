import React from 'react'

import Button from './Button'
import styled from 'styled-components'

const DiscordButtonWrapper = styled(Button)`
  background-color: #7289DA;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #5b6dae;
  }

  &:focus, button:active {
    border: none;
  }
`

const DiscordIcon = styled.img`
  height: 15px;
  margin-right: 10px;
`

export default function DiscordButton () {
  function openLink () {
    window.open('https://add.amongcord.xyz/')
  }

  return (
    <DiscordButtonWrapper onClick={openLink} ><DiscordIcon src='discord.svg' alt=''/>Add the bot to your server</DiscordButtonWrapper>
  )
}