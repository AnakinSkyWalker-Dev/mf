import { css } from '@linaria/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

const globalStyles = css`
  :global(body) {
    margin: 0;
  }

  :global(a, button) {
    all: unset;
    cursor: pointer;
  }
`

rootElement.className = globalStyles

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
