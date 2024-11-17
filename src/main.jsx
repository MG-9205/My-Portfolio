import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CSSTransition, TransitionGroup } from "react-transition-group";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
    <App />
  </CSSTransition>
  </TransitionGroup>
  </StrictMode>,
)
