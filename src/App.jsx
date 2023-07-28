import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <main>
      <h1>Hello, World!</h1>
    </main>
  )
}

const container = document.querySelector('#root')

if (!container) {
  throw new Error("No container to render")
}

const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

