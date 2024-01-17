import Link from '@docusaurus/Link';

const Homepage = () => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="home-container">
      <img src="img/backgroundLight.png" className="home-background" />
      <div className="content-container">
        <div className="intro-text">
          Streamlining mobile app development with
          <br />
          adaptable UI components and a robust theme system.
          <br />
          Start with Kitra.
        </div>
        <div className="button-container">

          <Link to="/docs/doc/getting-started" className="get-started-button">
            Get Started
          </Link>
          <button
            onClick={() => window.open('https://github.com/TRA-Tech/react-native-kitra', '_blank')}
            className="github-button"
          >
            Github
            <svg width="13.5" height="13.5" className="link-icon" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" /></svg>
          </button>
        </div>
      </div>
    </div>
    <div className="features-section">
      <img src="img/featuresbglight.png" className="features-image" />

      <div className="features-container">
        <img src="img/previewlight.png" className="features-preview" />

        <div className="features-text">
          <div className="features-header">
            Mobile Friendly Elements
          </div>
          <div className="features-description">
            Optimized UI elements for a wonderful mobile user experience.
            <br />
            Bring your React Native apps to the next level.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
