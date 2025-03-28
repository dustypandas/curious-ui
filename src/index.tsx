import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './pages/index.css';
import {
  CommunityPage,
  EventPage,
  HomePageNew,
  IndexPage,
} from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/home-ui' element={<HomePageNew />} />
        <Route path='/community-ui' element={<CommunityPage />} />
        <Route path='/event-ui' element={<EventPage />} />
        {/* default invalid? */}
      </Routes>
    </HashRouter>
  </StrictMode>,
)
