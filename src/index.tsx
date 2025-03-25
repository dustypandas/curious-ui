import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './pages/index.css';
import {
  CommunityPage,
  EventPage,
} from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {getPage(window.location.pathname)}
  </StrictMode>,
)

function getPage(pathname: string) {
  const pathnameKey = pathname.split('/').pop();

  switch (pathnameKey) {
    case '':
    case 'community': {
      return <CommunityPage />
    }
    case 'event': {
      return <EventPage />
    }
    default: {
      throw 'Invalid key';
    }
  }
}
