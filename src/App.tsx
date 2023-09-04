import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'

function App() {
  return <Home />
}

const container = document.querySelector('#root')

if (!container) {
  throw new Error("No container to render")
}

const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

