import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'

function Index() {
  return (
    <>
        <h1>Welcome to the Business Project</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          </div>
          <h2>Business Details</h2>
    </>
  )
}

export default Index