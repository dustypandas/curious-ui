import { useEffect, useState } from 'react';
import { PageFooter, PageHeader } from './_components';
import IconRatings from '../assets/icon-star.svg?react';
// import IconNewRatings from '../assets/icon-star-outline.svg?react';
import IconDatetime from '../assets/icon-calendar-outline.svg?react';
import IconMembers from '../assets/icon-group-outline.svg?react';
import IconTicket from '../assets/icon-ticket-outline.svg?react';
import './home-page-new.css';
import { communities, events } from './_data';

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

  const communitiesData = [
    communities.freshers,
    communities.dance,
    communities.conscious,
    communities.polylogue,
  ];
  const eventsData = [
    events.swing,
    events.lightning,
    events.story,
    events.circle,
    events.sketch,
    events.circle,
    events.swing,
    events.lightning,
  ];

  return (<div className='home-page'>
    <div className='page-bg'>
      <div className='page-bg__solid'></div>
      <div className='page-bg__gradient'></div>
    </div>
    <PageHeader isSticky={true} hideExploreEvents={true} />
    <div className='section-container banner-section placeholder-bg'>
      <div className='width-container'>
        <div className='banner-section__container'>
          <h2>
            Welcome to Socially 😌👋
          </h2>
          {/* <h1>
            A place for finding recurrent
            events with community
          </h1> */}
          {/* <h1>
            A home of recurring
            communities and events
          </h1> */}
          {/* <h1>
            A home of delightful
            communities and events
          </h1> */}
          <h1>
            A home of meaningful
            communities and events
            {/* nourishing, delightful, colourful, eclectic, diverse, unexpected, genuine, */}
          </h1>
          <h2>
            for international residents in Madrid.
          </h2>
          {/* <p>
            Let's create the
            community we want
            to be a part of,
            together.
          </p> */}
          <div className='banner-section__actions-container'>
            <a href='#' className='gm-link-btn gm-primary gm-animated'>
              Join an event
            </a>
            <a href='#' className='gm-link-btn gm-secondary gm-animated'>
              Find my people
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

    <div className='section-container events-section'>
      <div className='width-container'>
        <div className='section-container__title'>
          <h2>Upcoming Events</h2>
          {/* <a href='#' className='gm-link gm-animated'>
            See more events
          </a> */}
        </div>
        <div className='events-section__events-container'>
          {eventsData.map(event => (
            <a href='#/event-ui' className='event-item event-card'>
              <img
                className='event-item__img'
                src={event.img}
              />
              <div className='event-item__details-container'>
                <h3 className='event-item__title'>
                  {event.title}
                </h3>
                <div className='event-item__attribute-row event-item__community'>
                {/* 4.7
                  <IconRatings className='gm-icon gm-icon-ratings event-item__icon-ratings' />
                  &nbsp;• */}by <strong>{event.community.name}</strong>
                </div>
                <div className='event-item__attribute-row event-item__datetime'>
                  <IconDatetime className='gm-icon gm-icon-datetime event-item__icon-datetime' />
                  {event.date.homeDateLabels[0]} • {event.date.homeDateLabels[1]}
                </div>
                <div className='event-item__row-with-columns'>
                  <div className='event-item__attribute-row event-item__attendance'>
                    <IconMembers className='gm-icon gm-icon-members event-item__icon-members' />
                    {/* <IconCheck className='gm-icon gm-icon-check event-item__icon-check' /> */}
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
        <div className='section-container__bottom-link'>
          <a href='#' className='gm-link gm-animated'>See more events</a>
        </div>
      </div>
    </div>
    <div className='section-container communities-section placeholder-bg'>
      <div className='width-container'>
        <div className='section-container__title'>
          <h2>Common Interests</h2>
          {/* various hashtags, number of followers, etc */}
          {/* <h2>Featured Communities</h2> */}
          {/* <a href='#' className='gm-link gm-animated'>
            See more communities
          </a> */}
        </div>
        <div className='communities-section__communities-container'>
          {communitiesData.map(community => (
            <a href='#/community-ui' className='community-item event-card'>
              <img
                className='community-item__img'
                src={community.img}
              />
              <div className='community-item__details-container'>
                <h3 className='community-item__name'>
                  {community.name}
                  {/* • {community.ratings.rating}
                  <IconRatings className='gm-icon gm-icon-ratings community-item__icon-ratings' /> */}
                </h3>
                <div className='community-item__ratings'>
                  {
                    (community.ratings.count && community.ratings.rating)
                      ? (
                        <>
                          {community.ratings.rating}
                          <IconRatings className='gm-icon gm-icon-ratings community-item__icon-ratings' />
                        </>
                      ) : (
                        <>
                          NEW
                          <IconRatings className='gm-icon gm-icon-ratings community-item__icon-ratings' />
                          {/* <IconNewRatings className='gm-icon gm-icon-ratings community-item__icon-ratings' /> */}
                        </>
                      )
                  }
                  &nbsp;• {community.members.count} followers
                  {/* &nbsp;• {community.eventsCount.upcoming} upcoming events */}
                </div>
                <div className='community-item__about' dangerouslySetInnerHTML={{
                  __html: community.details,
                }} />
              </div>
            </a>
          ))}
        </div>
        <div className='section-container__bottom-link'>
          <a href='#' className='gm-link gm-animated'>See more communities</a>
        </div>
      </div>
    </div>
    <div className='section-container why-section'>
      <div className='width-container'>
        <div className='section-container__title'>
          <h2>Why socially?</h2>
          {/* <a href='#' className='gm-link gm-animated'>
            Connect with us
          </a> */}
        </div>
        <div className='why-section__content'>
          <div className='why-section__item'>
            <h3 className='why-section__item-title'>
              Find your people
            </h3>
            <div className='why-section-item-content'>
              <p>
                Find meaningful connections and
                community with other international
                residents living in Madrid. ☀️
              </p>
            </div>
          </div>
          <div className='why-section__item'>
            <h3 className='why-section__item-title'>
              By expats, for expats
            </h3>
            <div className='why-section-item-content'>
              <p>
                We are expats living in Madrid too!
                Join us to building the kind of
                communities we want to be a part of,
                in our new home. 🦖
              </p>
            </div>
          </div>
          <div className='why-section__item'>
            <h3 className='why-section__item-title'>
              Free for creators, forever
            </h3>
            <div className='why-section-item-content'>
              <p>
                Socially is free to use for creating
                your own expat community here in
                Madrid, forever 🙌
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className='section-container review-section' style={{
      height: '20rem',
    }}>
      <div className='width-container'>
        <div className='section-container__title'>
          <h2>What other members are saying about gentle.?</h2>
        </div>
        <div className='about-section__content'>
          socially.madrid was founded by a small group of friends, all international residents with diverse interests, living in Madrid.
        </div>
      </div>
    </div> */}

    {/* <div className='home-section-container section-communities' style={{
      marginTop: '1rem',
      height: '20rem',
    }}>
      <div className='width-container'>
        <h3>Big footer, various links</h3>
      </div>
    </div> */}
    <PageFooter />
  </div>);
}
