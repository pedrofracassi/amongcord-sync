import React from 'react'

import styled from 'styled-components'
import LinkButton from './LinkButton'

const DiscordIcon = styled.img`
  height: 15px;
  margin-right: 10px;
`

export default function DiscordButton () {
  return (
    <LinkButton color="#7289DA" link="https://add.amongcord.xyz/" margin><DiscordIcon src='discord.svg' alt=''/>Add the bot to your server</LinkButton>
  )
}