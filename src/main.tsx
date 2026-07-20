import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.tsx'

gsap.registerPlugin(ScrollTrigger)

// Mobile browsers show/hide the address bar while scrolling, which changes
// window.innerHeight mid-scroll and makes ScrollTrigger recalculate its
// pinned sections — that's what was causing the page to jitter/shake on
// phones. NOTE: normalizeScroll(true) also "fixed" that, but it takes over
// touch scrolling entirely and made the page feel heavy/hard to scroll —
// removed. This config-only flag is lighter: it just stops the resize-
// triggered recalculation without touching how scroll itself behaves.
ScrollTrigger.config({ ignoreMobileResize: true })

// The headline/display font (Big Shoulders) has very different metrics from
// the system-font fallback, so section heights shift once it finishes
// loading — that happens after ScrollTrigger has already measured pin
// positions, leaving them stale (this is what caused the jitter to come
// back). Forcing one refresh once fonts are actually ready re-measures
// everything against final layout.
document.fonts.ready.then(() => ScrollTrigger.refresh())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
