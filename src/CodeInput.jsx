import React from 'react'
import styled from 'styled-components'

import { syncIdLength } from './config.json'

const CodeInputWrapper = styled.input`
  text-transform: uppercase;
  font-family: 'Poppins';
  font-size: 48px;
  height: 80px;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  border: 2px solid #B3B3B3;
  text-align: center;
  margin-bottom: 10px;
  caret-color: transparent;
  user-select: initial;

  &::placeholder {
    color: #D9D9D9;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export default function CodeInput ({ syncId, setSyncId }) {
  return (
    <CodeInputWrapper
      key="codeinput"
      placeholder="ABC123"
      value={syncId}
      maxLength={syncIdLength}
      onInput={e => {
        if (e.target.value.length > syncIdLength) e.target.value = e.target.value.slice(0, syncIdLength)
        setSyncId(e.target.value.toUpperCase())
      }}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
    />
  )
}