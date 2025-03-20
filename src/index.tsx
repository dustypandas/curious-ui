import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CommunityPage from './CommunityPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CommunityPage />
  </StrictMode>,
)
