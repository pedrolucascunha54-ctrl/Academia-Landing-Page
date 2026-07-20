import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.tsx'

gsap.registerPlugin(ScrollTrigger)

// Mobile browsers show/hide the address bar while scrolling, which changes
// window.innerHeight mid-scroll and makes ScrollTrigger recalculate its
// pinned sections — that's what was causing the whole page to jitter/shake
// on phones. These two calls are GSAP's own recommended fix.
ScrollTrigger.config({ ignoreMobileResize: true })
ScrollTrigger.normalizeScroll(true)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
