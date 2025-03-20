import { useEffect, useState } from 'react';
import './community-page.css';
import IconMembers from './assets/icon-group-outline.svg?react';
import IconMember from './assets/icon-user-outline.svg?react';
import IconRatings from './assets/icon-star-outline.svg?react';
import IconLocation from './assets/icon-map-marker-outline.svg?react';
import IconContact from './assets/icon-email-outline.svg?react';

function CommunityPage() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasScrolledMuch, setHasScrolledMuch] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 5);
      setHasScrolledMuch(window.scrollY > 300); // 362 height of header area
    });
  }, []);

  const exampleEvent = {
    title: 'Lightning Talks @ Maria Pandora',
    location: 'Palacio',
    ratings: {
      rating: 4.3,
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
        '/assets/member-thumb-1.avif',
        '/assets/member-thumb-2.webp',
        '/assets/member-thumb-3.webp',
      ],
      count: 27,
    },
  };

  const community = {
    name: 'Polylogue Madrid: share • learn • inspire',
    members: {
      profiles: [...Array(15).keys()].map(index => ({
        id: index,
        image: exampleEvent.attendees.profiles[index % 3],
      })),
      count: 812,
    },
    creators: [
      { name: 'Peter C' },
      { name: 'Maria M' },
      { name: 'Achi J' },
    ],
    ratings: {
      rating: 4.3,
      count: 133,
      eventsCount: 14,
    }
  };
  const events = [
    { ...exampleEvent, dateLabels: ['Jan 21, 2025', 'Tuesday, 7:10pm'] },
    { ...exampleEvent, dateLabels: ['Feb 04, 2025', 'Tuesday, 7:10pm'] },
    { ...exampleEvent, dateLabels: ['Feb 18, 2025', 'Tuesday, 7:10pm'] },
    { ...exampleEvent, dateLabels: ['Mar 04, 2025', 'Tuesday, 7:10pm'] },
    { ...exampleEvent, dateLabels: ['Mar 18, 2025', 'Tuesday, 7:10pm'] },
    { ...exampleEvent, dateLabels: ['Apr 01, 2025', 'Tuesday, 7:10pm'] },
  ];

  return (
    <>
      <div className='page-bg'></div>
      <header className={`header-wrapper${!!hasScrolled ? ' has-border' : ''}`}>
        <div className='header-container'>
          <a href='/' className='header-logo__link'>
            <div className='header-logo'></div>
          </a>
          <div className='header-right'>
            <a
              href='/events'
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
              href='/sign-in'
              className='header__sign-in gm-link-btn gm-animated header-link-btn'
            >
              <span className='gm-link-btn__label'>
                Sign In
              </span>
            </a>
          </div>
        </div>
      </header>
      <section className='section-container community-intro'>
        <div className='width-container columns-layout'>
          <div className='community-intro__img-container column-content'>
            <img
              className='community-intro__img'
              src='/assets/community-bg.webp'
            />
          </div>
          <div className='community-intro__info-container column-sidebar'>
            <h1 className='community-intro__title'>
              {community.name}
            </h1>
            <div className='community-intro__attributes-container'>
              <div className='community-intro__attribute'>
                {/* <i className='gm-icon gm-icon-members' /> */}
                <IconMembers className='gm-icon gm-icon-members' />
                <div className='community-intro__attribute-label'>
                  {community.members.count} members
                </div>
              </div>
              <div className='community-intro__attribute'>
                {/* <i className='gm-icon icon-member'/> */}
                <IconMember className='gm-icon gm-icon-member' />
                {/* <Image
                  priority
                  src={twitterIcon}
                  alt="Follow us on Twitter"
                /> */}
                <div className='community-intro__attribute-label'>
                  Created by <b>{community.creators.slice(0, 1).pop()?.name}</b> and <b>{community.creators.length - 1} others</b>
                </div>
              </div>
              <div className='community-intro__attribute'>
                {/* <i className='gm-icon gm-icon-ratings' /> */}
                <IconRatings className='gm-icon gm-icon-ratings' />
                {/* <i className='gm-icon gm-icon-location' /> */}
                <div className='community-intro__attribute-label'>
                  {/* Palacio */}
                  {community.ratings.rating} / 5 (from {community.ratings.eventsCount} past events)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`section-container community-menu${!!hasScrolledMuch ? ' has-border' : ''}`}>
        <div className='width-container columns-layout'>
          <div className='community-menu__links-container column-content'>
            <a href='#' className='gm-link gm-animated community-menu__link'>About</a>
            <a href='#' className='gm-link gm-animated community-menu__link'>Events</a>
            <a href='#' className='gm-link gm-animated community-menu__link'>Members</a>
            {/* <a href='/' className='gm-link gm-animated community-menu__link'>Photos</a> */}
            <a href='#' className='gm-link gm-animated community-menu__link'>Disussions</a>
          </div>
          <div className='community-menu__actions-container column-sidebar'>
            <a href='/' className='gm-link-btn gm-animated community-menu__link-btn'>
              <span className='gm-link-btn__label'>
                Join community
              </span>
              {/* Follow, Subscribe, Join this group, [Subscribe] to future events, Follow future event, Join this community */}
            </a>
            {/* <span className='community-menu__link-btn, community-menu__label'>
              to receive email updates
            </span> */}
          </div>
        </div>
      </section>
      <section className='section-container community-details'>
        <div className='width-container columns-layout'>
          <div className='column-content'>
            <div className='about-section'>
              <h2>Who we are</h2>
              <div className='about-section__content'>
                <p>
                  Polylogue is a community for meeting people who share diverse interests, eclectic curiosities, wayward stories and uncommon perspectives. 🎓📚💫
                </p>
                <p>
                  Come join us for fortnightly "Lightning Talks" - where a number of speakers give 5 minute presentations about any topic of their choosing, followed by 5 minutes of open questions.
                </p>
              </div>
            </div>
            <div className='events-section'>
              <div className='section__title-container'>
                <h2>Upcoming Events ({events.length})</h2>
                <a href='#' className='gm-link gm-animated'>View all</a>
              </div>

              <div className='events-container'>
                {events.slice(0,3).map(event => (
                  <div className='event-item'>
                    <div className='timeline-line'></div>
                    <div className='timeline-title'>
                      <div className='timeline-date'>
                        <span className='timeline-date__part-date'>
                          {event.dateLabels[0]}
                          {/* Jan 12, 2025 */}
                        </span>
                        <span className='timeline-date__part-time'>
                          {event.dateLabels[1]}
                          {/* Sunday, 7:10pm */}
                        </span>
                      </div>
                      <div className='dot-wrapper'>
                        <div className='dot'></div>
                      </div>
                    </div>
                    <a href='#' className='event-card gm-animated'>
                      <div className='event-card__inner'>
                        <div className='event-cover'>
                          <div className='event-cover__img-wrapper'>
                            <img className='event-cover__img' src='/assets/community-bg.webp'/>
                          </div>
                          <div className='event-cover__content'>
                            <h3 className='event-cover__title'>
                              {event.title}
                              {/* Lightning Talks @ Maria Pandora */}
                            </h3>
                            <div className='event-cover__attributes-container'>
                              <div className='event-cover__attribute'>
                                {/* <i className='gm-icon gm-icon-location' /> */}
                                <IconLocation className='gm-icon gm-icon-location' />
                                <div className='event-cover__attribute-label'>
                                  {event.location}
                                  {/* Palacio */}
                                </div>
                              </div>
                              <div className='event-cover__attribute'>
                                {/* <i className='gm-icon gm-icon-ratings' /> */}
                                <IconRatings className='gm-icon gm-icon-ratings' />
                                <div className='event-cover__attribute-label'>
                                  {`${event.ratings.rating} / 5 (from ${event.ratings.count} ratings)`}
                                  {/* 4.3 / 5 (313 ratings) */}
                                </div>
                              </div>
                            </div>
                            <div
                              className='event__details'
                              dangerouslySetInnerHTML={{__html: event.details}}
                            />
                            {/* <p>
                                5 Speakers, 5 minute presentations, 5 diverse topics! 🙌⚡️
                              </p>
                              <p>
                                Lightning Talks is a format where a number of speakers give <strong>5 minute presentations</strong> about <strong>any topic of their choosing</strong>, followed by 5 minutes of open questions.
                              </p> */}
                          </div>
                        </div>
                        <div className='event-attendances'>
                          <div className='event-attendances__attendees'>
                            <div className='event-attendances__attendees-img-container'>
                              {event.attendees.profiles.map((img, index) => (
                                <img
                                  className='event-attendances__attendee-img'
                                  src={img}
                                  style={{zIndex: 5-index}}
                                />
                              ))}
                            </div>
                            <div className='event-attendances__attendees-label'>
                              {`${event.attendees.count} attendees`}
                              {/* 27 attendees */}
                            </div>
                          </div>

                          <div className='event-attendances__actions-container'>
                            <a href='#' className='gm-link-btn gm-primary gm-animated event-attendances__attend-button'>
                              <span className='gm-link-btn__label'>
                                Attend
                                {/* Attend, Register, Join event */}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='community-details__sidebar column-sidebar'>
            <h2>Creators</h2>
            <div className='organizers-container'>
              <img
                className='member-item__member-img'
                src={community.members.profiles.slice(0, 1).pop()?.image}
              />
              <div className='organizers-details'>
                <div className='organizers-details__label'>
                  <b>{community.creators.slice(0, 1).pop()?.name}</b> and <b>{community.creators.length - 1} others</b>
                </div>
                <a href='#' className='organizers-details__contact gm-animated'>
                  <IconContact className='gm-icon gm-icon-contact' />
                  <div className='organizers-details__contact-label'>
                    contact
                  </div>
                </a>
              </div>
            </div>

            <div className='section__title-container'>
              <h2>Members ({community.members.count})</h2>
              <a href='#' className='gm-link gm-animated'>View all</a>
            </div>
            <a href='#' className='members-container'>
              {community.members.profiles.slice(0, 15).map(profile => (
                <img
                  className='member-item__member-img'
                  src={profile.image}
                />
              ))}
            </a>
          </div>
        </div>
      </section>
      <footer className='width-container footer-wrapper'>
        <div className='footer-container'>
          <a href='#' className='footer-link gm-link-btn gm-animated'>
            <div className='footer-link__label'>
              Create your own events @gentle
            </div>
          </a>
        </div>
      </footer>
    </>
  )
}

/*
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
  <h3>
    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  </h3>
  <p>
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  </p>
  <h3>
    1914 translation by H. Rackham
  </h3>
  <p>
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
  </p>
*/

export default CommunityPage;
