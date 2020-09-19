import React from 'react'

import Button from './Button'
import styled from 'styled-components'
import Color from 'color'

export default function LinkButton ({ link, children, color, margin }) {
  const LinkButtonWrapper = styled(Button)`
  background-color: ${color};
  width: 100%;
  cursor: pointer;
  ${ margin ? 'margin-top: 20px;' : ''}

  &:hover {
    background-color: ${Color(color).darken(0.07)};
  }

  &:focus, button:active {
    border: none;
  }
`

  function openLink () {
    window.open(link)
  }

  return (
    <LinkButtonWrapper onClick={openLink}>{children}</LinkButtonWrapper>
  )
}