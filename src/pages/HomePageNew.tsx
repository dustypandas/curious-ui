import { useEffect, useState } from 'react';
import { PageFooter, PageHeader } from './_components';
import IconRatings from '../assets/icon-star.svg?react';
import IconDatetime from '../assets/icon-calendar-outline.svg?react';
import IconMembers from '../assets/icon-group-outline.svg?react';
import IconTicket from '../assets/icon-ticket-outline.svg?react';
import './home-page-new.css';

export function HomePageNew() {
  const [hasScrolledLittle, setHasScrolledLittle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // set hasScrolledLittle
      const hasScrolledLittleCalc = window.scrollY > 10;
      if (hasScrolledLittleCalc !== hasScrolledLittle) {
        setHasScrolledLittle(hasScrolledLittleCalc);
      }
    });
    // add effect resize to set scroll distance based on header height
  }, [hasScrolledLittle]);

  const exampleEvent = {
    img: './assets/community-bg.webp',
    title: 'Lightning Talks @ Maria Pandora',
    location: 'Palacio',
    ratings: {
      rating: 4.7,
      count: 313,
    },
    details: `<p>
                5 Speakers, 5 minute presentations, 5 diverse topics! 🙌⚡️
              </p>
              <p>
                Lightning Talks is a format where a number of speakers give <strong>5 minute presentations</strong> about <strong>any topic of their choosing</strong>, followed by 5 minutes of open questions.
              </p>`,
    attendees: {
      profiles: [
        './assets/member-thumb-1.avif',
        './assets/member-thumb-2.webp',
        './assets/member-thumb-3.webp',
      ],
      count: 27,
    },
  };
  const exampleCommunities = ['Polylogue', 'Freshers of Madrid', 'Happy Feet'];
  const events = [
    { ...exampleEvent, dateLabels: ['Tue, Jan 21', '9:00pm'], community: exampleCommunities[0] },
    { ...exampleEvent, dateLabels: ['Tue, Feb 04', '7:10pm'], community: exampleCommunities[1] },
    { ...exampleEvent, dateLabels: ['Tue, Feb 18', '7:10pm'], community: exampleCommunities[2] },
    { ...exampleEvent, dateLabels: ['Tue, Mar 04', '7:10pm'], community: exampleCommunities[0] },
    { ...exampleEvent, dateLabels: ['Tue, Mar 18', '7:10pm'], community: exampleCommunities[1] },
    { ...exampleEvent, dateLabels: ['Tue, Apr 01', '7:10pm'], community: exampleCommunities[2] },
    { ...exampleEvent, dateLabels: ['Tue, Apr 08', '7:10pm'], community: exampleCommunities[2] },
    { ...exampleEvent, dateLabels: ['Tue, Apr 15', '7:10pm'], community: exampleCommunities[2] },
    { ...exampleEvent, dateLabels: ['Tue, Apr 22', '7:10pm'], community: exampleCommunities[2] },
  ];

  return (<div className='home-page'>
    <div className='page-bg'>
      <div className='page-bg__solid'></div>
      <div className='page-bg__gradient'></div>
    </div>
    <PageHeader isSticky={true} hideExploreEvents={true} />
    <div className='banner-section'>
      <div className='width-container'>
        <div className='banner-section__container'>
          <h2>
            Welcome to gentle 😌👋
          </h2>

          {/* <h1>
            A home for communities<br/>
            and events of international<br/>
            residents in Madrid.
          </h1> */}
          {/* <h1>
            A place for finding recurrent
            events with community
          </h1> */}
          {/* <h1>
            A place for finding meaningful
            communities with events
          </h1> */}
          {/* <h1>
            A home of meaningful
            communities with events
          </h1> */}
          <h1>
            A home of delightful
            communities with events
            {/* welcoming, meaningful, inspiring, colourful, eclectic, nourishing, diverse, unexpected, genuine, */}
          </h1>
          <h2>
            for international residents in Madrid.
          </h2>
          <div className='banner-section__actions-container'>
            <a href='#' className='gm-link-btn gm-primary gm-aniamted'>
              Join an event
            </a>
            <a href='#' className='gm-link-btn gm-secondary gm-aniamted'>
              Find a community
              {/* Suggest a community */}
            </a>
          </div>
          {/* <p>
            Come [join a public event]<br/>
            or [suggest a community] you'd like to find, or create, here in Madrid
          </p> */}
        </div>
      </div>
    </div>


    <div className='width-container'>
      <div className='section-container events-section'>
        <div className='section-container__title'>
          <h2>Upcoming Events</h2>
          <a href='#' className='gm-link gm-animated'>
            See more events
            {/* <IconDiagonalArrow className='gm-icon' /> */}
          </a>
        </div>
        <div className='events-section__events-container'>
          {events.map(event => (
            <a href='#/event-ui' className='event-item event-card'>
              {/* <div className='event-item__img-wrapper'> */}
              <img
                className='event-item__img'
                src={event.img}
              />
              {/* </div> */}
              <div className='event-item__details-container'>
                <h3 className='event-item__title'>
                  {event.title}
                </h3>
                <div className='event-item__attribute-row event-item__community'>
                  4.7
                  <IconRatings className='gm-icon gm-icon-ratings event-item__icon-ratings' />
                  &nbsp;• by <strong>{event.community}</strong>
                </div>
                <div className='event-item__attribute-row event-item__datetime'>
                  <IconDatetime className='gm-icon gm-icon-datetime event-item__icon-datetime' />
                  {event.dateLabels[0]} • {event.dateLabels[1]}
                </div>
                <div className='event-item__row-with-columns'>
                  <div className='event-item__attribute-row event-item__attendance'>
                    <IconMembers className='gm-icon gm-icon-members event-item__icon-members' />
                    {event.attendees.count} going
                  </div>
                  <div className='event-item__attribute-row event-item__pricing'>
                    <IconTicket className='gm-icon gm-icon-ticket event-item__icon-ticket' />
                    Free
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className='events-section__bottom-link'>
          <a href='#' className='gm-link gm-animated'>See more events</a>
        </div>
      </div>

      <div className='section-container communities-section' style={{
        height: '20rem',
      }}>
        <div className='section-container__title'>
          <h2>Featured Communities</h2>
          <a href='#' className='gm-link gm-animated'>
            See more communities
          </a>
        </div>
        <div className='communities-section__bottom-link'>
          <a href='#' className='gm-link gm-animated'>See more communities</a>
        </div>
      </div>
      <div className='section-container about-section' style={{
        height: '20rem',
      }}>
        <div className='section-container__title'>
          <h2>Who We Are</h2>
          <a href='#' className='gm-link gm-animated'>
            Connect with us
          </a>
        </div>
        <div className='about-section__content'>
          gentle.madrid was founded by a small group of friends, all international residents with diverse interests, living in Madrid.
        </div>
      </div>
      <div className='home-section-container section-communities' style={{
        marginTop: '1rem',
        height: '20rem',
      }}>
        <h3>Big footer, various links</h3>
      </div>

    </div>
    <PageFooter />
  </div>);
}
