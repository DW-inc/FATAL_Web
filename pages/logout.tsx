import Button from '../src/components/commons/Button'
import React from 'react'

export default function Logout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      logout
      <Button backgroundColor="blue" type="button">
        로그아웃
      </Button>
    </div>
  )
}
