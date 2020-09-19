import React from 'react'

import styled from 'styled-components'
import LinkButton from './LinkButton'

const PatreonIcon = styled.img`
  height: 15px;
  margin-right: 10px;
`

export default function PatreonButton () {
  return (
    <LinkButton color="#e85b46" link="https://patreon.com/pedrofracassi"><PatreonIcon src='patreon.svg' alt=''/>Become a Patron</LinkButton>
  )
}