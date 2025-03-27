import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './pages/index.css';
import {
  CommunityPage,
  EventPage,
  HomePageNew,
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
    case 'home-ui': {
      return <HomePageNew />
    }
    case 'community-ui': {
      return <CommunityPage />
    }
    case 'event-ui': {
      return <EventPage />
    }
    default: {
      throw 'Invalid key';
    }
  }
}
