import React, { useState } from 'react';

import GamePage from './GamePage'
import CodePage from './CodePage'

import openSocket from 'socket.io-client'

import NoSleep from 'nosleep.js';
const noSleep = new NoSleep()
noSleep.enable()

function App () {
  const idFromPath = window.location.pathname.split('/').join('')
  const [ syncId, setSyncId ] = useState(idFromPath)
  
  const [connected, setConnected] = useState(false)

  const [reconnecting, setReconnecting] = useState(false)

  const [socket, setSocket] = useState()

  const [loading, setLoading] = useState(false)

  const [gameState, setGameState] = useState({
    sync_id: '',
    channel_name: '',
    game_stage: 'lobby',
    players: []
  })

  function sendStageUpdate (stage) {
    setLoading(true)
    socket.emit('setStage', JSON.stringify({
      sync_id: gameState.sync_id,
      game_stage: stage
    }))
  }

  function sendAliveUpdate (color, alive) {
    setLoading(true)
    socket.emit('setAlive', JSON.stringify({
      sync_id: gameState.sync_id,
      color, alive
    }))
  }

  function connectToGame () {
    const newSocket = openSocket(process.env.REACT_APP_SYNC_SERVER_ADDRESS || 'localhost:8081')

    setLoading(true)

    newSocket.on('connect', () => {
      newSocket.emit('join', syncId)
    })

    newSocket.on('gameStateUpdate', state => {
      setLoading(false)
      setConnected(true)
      setGameState(state)
    })

    newSocket.on('gameEnded', () => {
      setSyncId('')
      setConnected(false)
    })

    newSocket.on('connect_error', () => { setConnected(false) })
    newSocket.on('connect_timeout', () => { setConnected(false) })
    newSocket.on('disconnect', () => {
      setConnected(false)
    })
    newSocket.on('reconnecting', () => { setReconnecting(true) })
    newSocket.on('reconnect', () => { setReconnecting(false) })
    newSocket.on('reconnect_failed', () => {
      setConnected(false)
      setReconnecting(false)
    })
    
    setSocket(newSocket)
  }

  return connected ? <GamePage
    gameState={gameState}
    reconnecting={reconnecting}
    sendAliveUpdate={sendAliveUpdate}
    sendStageUpdate={sendStageUpdate}
    loading={loading}
  /> : <CodePage
    syncId={syncId}
    setSyncId={setSyncId}
    connectToGame={connectToGame}
    loading={loading}
  />
}

export default App;
