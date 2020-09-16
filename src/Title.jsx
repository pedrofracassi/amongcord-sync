import React from 'react'

export default function Title ({ className }) {
  return (
    <div className={className}>
      <img src='icon.png' height='110' alt='Amongcord Icon'/>
      <br/>
      <img src='logo.svg' style={{ marginBottom: '35px' }} alt='Amongcord Sync'/>
    </div>
  )
}