import './App.scss';
import {
  NAVIGATION_ICON_LINK_PATHS,
  NAVIGATION_LINK,
} from './Navigation.constants';
import { SERVICES_SECTIONS } from './Services.constants';
import { SOCIAL_PATH, TEAM_MEMBERS } from './Team.constants';

function App() {
  return (
    <main>
      <nav className="navigation">
        <div className="navigation--container">
          <h3 className="text--white ">MoGo</h3>
          <div className="navigation--links">
            {NAVIGATION_LINK.map((navigationLink, index) => (
              <a key={index} href="#" className="navigation--link">
                {navigationLink}
              </a>
            ))}
            {NAVIGATION_ICON_LINK_PATHS.map((navigationLinkIconPath, index) => (
              <a key={index} href="#" className="navigation--link">
                <img src={navigationLinkIconPath} alt="navigation-icon" />
              </a>
            ))}
          </div>
        </div>
      </nav>
      <header className="header">
        <div className="header--title">
          <h2 className="text--center text--white">Creative Template</h2>
          <h1 className="text--center text--white">WELCOME TO MOGO</h1>
          <button className="button button--secondary m-t-100">
            Learn more
          </button>
        </div>
      </header>
      <section>
        <header className="section--title">
          <h4>We work with</h4>
          <h3>amazing services</h3>
        </header>
        <div className="section--container">
          {SERVICES_SECTIONS.map((section) => (
            <article className="paper">
              <div className="paper--icon">
                <img src={section.icon} alt={`service-icon-${section}`} />
              </div>
              <div className="paper--content">
                <h5>{section.title}</h5>
                <p>{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <header className="section--title">
          <h4>Who we are</h4>
          <h3>meet out team</h3>
        </header>
        <article className="section--text">
          <p className="text--center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>
        </article>

        <div className="section--container">
          {TEAM_MEMBERS.map((teamMember, index) => (
            <div key={`tm-${index}`} className="card">
              <div className="card--image">
                <div className="card--image--socials">
                  {Object.keys(teamMember.socials).map((social, index) => (
                    <div key={index} className="card--image--socials--box">
                      <img src={SOCIAL_PATH(social)} alt={social} />
                    </div>
                  ))}
                </div>
                <figure>
                  <picture>
                    <source
                      media="(min-width: 2000px)"
                      srcset={`${teamMember.image}_x2`}
                    />
                    <img
                      className="h-100"
                      src={teamMember.image}
                      alt={`teamMember-${teamMember.role}`}
                    />
                  </picture>
                </figure>
              </div>
              <figcaption className="card--content">
                <h5 className="text--center m-t-15">{teamMember.name}</h5>
                <p className="text--center m-t-5">{teamMember.role}</p>
              </figcaption>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <hr className="w-100" />
        <div className="footer--content">
          <h5>© 2016 MoGo free PSD template by Laaqiq</h5>
          <div className="footer--content--newsletter">
            <input placeholder="Your email" />
            <button className="button">subscribe</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
