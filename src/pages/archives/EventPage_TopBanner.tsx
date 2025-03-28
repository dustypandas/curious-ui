import { useEffect, useState } from 'react';
import IconLocation from '../assets/icon-map-marker-outline.svg?react';
import './event-page.css';

export function EventPage() {
  const [hasScrolledABit, setHasScrolledABit] = useState(false);
  const [hasScrolledNearEnd, setHasScrolledNearEnd] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // set hasScrolledABit
      const hasScrolledABitCalc = window.scrollY > 400;
      if (hasScrolledABitCalc !== hasScrolledABit) {
        setHasScrolledABit(hasScrolledABitCalc);
      }
      // set hasScrolledNearEnd
      const docBody = window.document.body;
      const hasScrolledNearEndCalc = window.scrollY > docBody.scrollHeight - docBody.offsetHeight - 50;
      if (hasScrolledNearEndCalc !== hasScrolledNearEnd) {
        setHasScrolledNearEnd(hasScrolledNearEndCalc);
      }
    });
    // add effect resize to set scroll distance based on header height
  }, [hasScrolledABit, hasScrolledNearEnd]);

  const event = {
    title: 'Lightning Talks @ Maria Pandora',
    location: 'Palacio',
    ratings: {
      rating: 4.3,
      count: 313,
    },
    attendees: {
      profiles: [
        './assets/member-thumb-1.avif',
        './assets/member-thumb-2.webp',
        './assets/member-thumb-3.webp',
        './assets/member-thumb-1.avif',
        './assets/member-thumb-2.webp',
      ],
      count: 27,
    },
    community: {
      name: 'Polylogue',
      img: './assets/community-bg.webp',
    },
  };

  return (<>
    <div className='page-bg'>
      <div className='page-bg__solid'></div>
      <div className='page-bg__gradient'></div>
    </div>
    <header className='header-wrapper subtle'>
    {/* <header className={`header-wrapper${!!hasScrolled ? ' has-border' : ''}`}> */}
      <div className='header-container'>
        <a href='./home-ui' className='header-logo__link'>
          <div className='header-logo'></div>
        </a>
        <div className='header-right'>
          <a
            href='#'
            className='header__explore-events gm-link gm-animated header-link'
            style={{ height: '1.5rem' }}
          >
            <span className='gm-link__label'>Explore Events</span>
            <span className='gm-link__icon'>
              <svg style={{ width: '1rem', height: '1rem', verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                <path d="M7 17 17 7M7 7h10v10"></path>
              </svg>
            </span>
          </a>
          <a
            href='#'
            className='header__sign-in gm-link-btn gm-animated header-link-btn'
          >
            <span className='gm-link-btn__label'>
              Sign In
            </span>
          </a>
        </div>
      </div>
    </header>
    <section className='section-container event-content'>
      <div className='width-container columns-layout'>
        <div className='event-content-left column-left'>
          <div className='event-img__container'>
            <div className='event-img__wrapper-glow'>
              <img
                className='event-img__img'
                src={event.community.img}
              />
            </div>
            <div className='event-img__wrapper'>
              <img
                className='event-img__img'
                src={event.community.img}
              />
            </div>
          </div>
          <div className='event-sidebar__sticky'>
            <div className={`event-sidebar__event-title gm-animated${hasScrolledABit ? ' is-visible' : ''}`}>
              <h3>
                {event.title}
                {/* TODO click to scroll to top */}
                {/* if double line, still center in line with top bar */}
              </h3>
            </div>
            <div className='event-community__container'>
              <a href='#' className='event-community__header-row gm-link-dark'>
                <img
                  className='event-community__header-img'
                  src={event.community.img}
                />
                <div className='event-community__header-title-container'>
                  <div className='event-community__header-title-label'>
                    Organized by
                  </div>
                  <div className='event-community__header-title-name gm-animated gm-link__label'>
                    {event.community.name}
                  </div>
                </div>
              </a>
              <div className='event-community__about'>
                <p>
                  Polylogue is a community for meeting people who share diverse interests, eclectic curiosities, wayward stories and uncommon perspectives. 🎓📚💫
                </p>
                <p>
                  Come join us for fortnightly "Lightning Talks" - where a number of speakers give 5 minute presentations about any topic of their choosing, followed by 5 minutes of open questions.
                </p>
              </div>
            </div>
            <div className='event-sidebar__section-container'>
              <div className='event-sidebar__section-title'>
                Hosted by
              </div>
              <div className='event-hosts__hosts-container'>
                <a href='#' className='event-hosts__host-row gm-link-dark'>
                  <img
                    className='event-hosts__host-img'
                    src={event.attendees.profiles[0]}
                  />
                  <div className='event-hosts__host-label gm-link__label gm-animated'>
                    Achi J
                  </div>
                </a>
                <a href='#' className='event-hosts__host-row gm-link-dark'>
                  <img
                    className='event-hosts__host-img'
                    src={event.attendees.profiles[1]}
                  />
                  <div className='event-hosts__host-label gm-link__label gm-animated'>
                    Peter C
                  </div>
                </a>
              </div>
            </div>
            {/* Tags */}
            {/* <div className='event-sidebar__section-container'>
              <div className='event-sidebar__section-title'>
                How to find us:
              </div>
              <p><b>Saturday, March 8</b>, 12:00 PM - 1:00 PM</p>
              <p>Palacio, Madrid</p>
              Map
            </div> */}
          </div>
        </div>
        <div className='event-content-main column-main'>
          <div className='event-intro'>
            <h1 className='event-intro__title'>
              {event.title}
            </h1>
            <div className='event-intro__attributes'>
              <div className='event-intro__attribute-row'>
                <div className='event-intro__icon-container'>
                  <div className='event-intro__icon-calendar-month'>Mar</div>
                  <div className='event-intro__icon-calendar-date'>23</div>
                </div>
                <div className='event-intro__attribute-details-container'>
                  <div className='event-intro__attribute-details-row'>
                    Saturday, March 8, 2025
                  </div>
                  <div className='event-intro__attribute-details-row'>
                    12:00 PM - 1:00 PM
                  </div>
                </div>
              </div>
              <div className='event-intro__attribute-row'>
                <div className='event-intro__icon-container gm-flex-center-center'>
                  <IconLocation className='gm-icon gm-icon-location' />
                </div>
                <div className='event-intro__attribute-details-container'>
                  <div className='event-intro__attribute-details-row'>
                    Exact address visible to attendees
                  </div>
                  <div className='event-intro__attribute-details-row'>
                    Palacio, Madrid
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`event-actions gm-animated${hasScrolledABit ? ' is-expanded' : ''}`}>
            <div className='card-container'>
              <div className='card-container__header'>
                <div className='card-container__header-label'>
                  {event.attendees.count} Attending
                </div>
              </div>
              <div className='card-container__body event-actions__container'>
                <div className='event-attendances__attendees'>
                  <div className='event-attendances__attendees-img-container'>
                    {event.attendees.profiles.map((img, index) => (
                      <img
                        className='event-attendances__attendee-img'
                        src={img}
                        style={{zIndex: 20-index}}
                      />
                    ))}
                  </div>
                  <div className='event-attendances__attendees-label'>
                    {`+${event.attendees.count} others`}
                    {/* 27 attendees */}
                  </div>
                </div>
                <div className='event-actions__actions-container'>
                  <div className='event-actions__pricing-label'>
                    Free
                  </div>
                  <a href='#' className='gm-link-btn gm-primary event-actions__primary-btn'>
                    Join event
                    {/* Join waitlist */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='event-description'>
            <div className='event-description__title'>
              About event
            </div>
            <div className='event-description__content'>
              <p>
                5 Speakers, 5 minute presentations, 5 diverse topics! 🙌⚡️
              </p>
              <p>
                Lightning Talks is a format where a number of speakers give <b>5 minute presentations</b> about <b>any topic of their choosing</b>, followed by 5 minutes of open questions.
              </p>
              <p>
                There will be <b>5-6 talks starting at 19:30</b>, followed by drinks and social.
              </p>
              <p>
                Come join us to hear and discuss some unexpected ideas across surprising topics, broaden our horizons and meet interesting people.
              </p>
              <p>
                You can find photos from some of our recent events here:<br/>
                <a href='#'><b>https://www.instagram.com/polylogue_madrid</b></a>
              </p>
              <p>
                or sign up here if you'd like to give a talk at our next event:<br/>
                <a href='#'><b>https://forms.gle/Nx2847ZENMxkBMut8</b></a>
              </p>
              {/* Other content */}
              <h3>
                The standard Lorem Ipsum passage, used since the 1500s
              </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <h3>
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
              </h3>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </p>
              <h3>
                1914 translation by H. Rackham
              </h3>
              <p>
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={`section-container event-actions-bottom${!!hasScrolledNearEnd ? '' : ' has-border'}`}>
      <div className='width-container columns-layout'>
        <div style={{ flex: 1 }}>
          {event.title}
        </div>
        <div>
          <a href='#' className='gm-link-btn gm-primary event-actions__primary-btn'>
            Join event
            {/* Join waitlist */}
          </a>
        </div>
      </div>
    </section>
    <footer className='width-container footer-wrapper'>
      <div className='footer-container'>
        <a href='#' className='footer-link gm-link-btn gm-animated'>
          <div className='footer-link__label'>
            Build your own community in Madrid @gentle
          </div>
        </a>
      </div>
    </footer>
  </>);
}
