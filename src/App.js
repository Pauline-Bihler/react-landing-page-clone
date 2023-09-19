import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/HypercomplyLogo.svg';

export default function App() {
  return (
    <>
      <main>
        <section>
          <div className={styles.heroSection}>
            <div className={styles.container}>
              <header>
                <nav>
                  <a href="/#" className={styles.hyperComplyLogo}>
                    <Logo />
                  </a>
                  <ul>
                    <li>
                      <a href="/#">Product</a>
                    </li>
                    <li>
                      <a href="/#">Pricing</a>
                    </li>
                    <li>
                      <a href="/#">Company</a>
                    </li>
                    <li>
                      <a href="/#">Learn more</a>
                    </li>
                  </ul>
                  <div className={styles.linksContainer}>
                    <a href="/#" className={styles.signInButton}>
                      Sign in
                    </a>
                    <a href="/#" className={styles.requestDemoButton}>
                      Request a Demo
                    </a>
                  </div>
                </nav>
              </header>
              {/* <div className={styles.heroBox}>
                <div className={styles.heroContent}>
                  <div className={styles.heroText}>
                    <h1>
                      Stop wasting
                      <br />
                      time on security questionnaires
                    </h1>
                    <p>
                      HyperComply is the easiest way for InfoSec and Sales
                      leaders to share compliance information, automate security
                      questionnaires, and accelerate sales.
                    </p>
                    <a href="/#" className={styles.requestDemoButton}>
                      Request a Demo
                    </a>
                  </div>
                  <div>
                    <a href="/#" className={styles.requestDemoButton}>
                      Request a Demo
                    </a>
                  </div>
                  <div className={styles.heroImageContainer}>
                    <img
                      src="/applicationinterface.png"
                      alt="hero header pic"
                    />
                  </div>
                </div>
              </div> */}
              <div className={styles.heroContentContainer}>
                {/* Text Column */}
                <div className={styles.heroText}>
                  <h1>
                    Stop wasting
                    <br />
                    time on security questionnaires
                  </h1>
                  <p>
                    HyperComply is the easiest way for InfoSec and Sales leaders
                    to share compliance information, automate security
                    questionnaires, and accelerate sales.
                  </p>
                  <br />
                  <a href="/#" className={styles.requestDemoButton}>
                    Request a Demo
                  </a>
                </div>

                {/* Image Column */}
                <div className={styles.heroImageContainer}>
                  <img
                    className={styles.heroImage}
                    src="/applicationinterface.png"
                    alt="hero header pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>Logos with animation section 2</section>
        <section>
          <div className={styles.sectionThreeTexts}>
            <span className={styles.sectionThreeAllCaps}>
              FOR SALES TEAMS AT STARTUP COMPANIES
            </span>
            <h2 className={styles.sectionThreeBigHeader}>Close deals faster</h2>
            <a href="/#" className={styles.learnMoreButton}>
              Learn More
            </a>
            <p>
              Don't let security reviews slow you down. We help you deflect or
              automate security questionnaires in 1 day, guaranteed.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.heroTextSecFour}>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Deflect security questionnaires
                </h4>
                <p>
                  Accelerate sales and save time by proactively sharing security
                  information. With a Trust Page, you can avoid security
                  questionnaires and keep your information secure. Decide which
                  documents require an NDA or approval, so you're always in
                  control. Try a Trust Page for free to get started.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgOne}
                  src="/SectionFourImgOne.png"
                  alt="SectionFourImgOne"
                />
              </div>
            </div>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Automation + human review
                </h4>
                <p>
                  No more late nights copy-pasting between spreadsheets. When
                  you do get questionnaires, HyperComply uses machine learning
                  and a team of certified experts to complete them up to 18X
                  faster so you can get back to more strategic work.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgTwo}
                  src="/SectionFourImgTwo.jpg"
                  alt="SectionFourImgTwo"
                />
              </div>
            </div>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Seamless sharing + security
                </h4>
                <p>
                  Bring SOC 2 reports, contracts, and other sensitive documents
                  out of your inbox and into a secure Data Room for easy and
                  secure sharing. Manage access controls, set auto-expire dates,
                  and keep a record of who has accessed your information.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgThree}
                  src="/SectionFourImgThree.png"
                  alt="SectionFourImgThree"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>
          {' '}
          <div className={styles.sectionThreeTexts}>
            <span className={styles.sectionThreeAllCaps}>
              FOR SECURITY TEAMS WITH SOC 2 CERTIFICATION
            </span>
            <h2 className={styles.sectionThreeBigHeader}>
              Easy vendor reviews
            </h2>
            <p>
              HyperComply makes it easy to send security questionnaires to new
              vendors and monitor your network of tools over time.
            </p>
            <a href="/#" className={styles.learnMoreButton}>
              Learn More
            </a>
          </div>
        </section>
        <br />
        <section>
          <div className={styles.heroTextSecFour}>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Find and fill security gaps
                </h4>
                <p>
                  When all of your information is in one place, it’s easy to
                  find risks and fill gaps in your processes proactively.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgOne}
                  src="/SectionFiveImg.png"
                  alt="SectionFiveImgOne"
                />
              </div>
            </div>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Streamline your procurement processes
                </h4>
                <p>
                  Send out reviews and track progress in detail from your
                  dashboard. HyperComply will notify you when tasks need your
                  attention, so you can keep things moving forward.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgTwo}
                  src="/SectionFiveImgTwo.png"
                  alt="SectionFiveImgTwo"
                />
              </div>
            </div>
            <div className={styles.SecFourRow}>
              <div className={styles.SecFourTextColumn}>
                <h4 className={styles.SecFourHeaderOne}>
                  Never start from scratch
                </h4>
                <p>
                  Create a custom questionnaire template or choose from industry
                  standards like SIG or CAIQ. HyperComply will store your
                  preferred frameworks and templates so you're never starting
                  from scratch.
                </p>
              </div>
              <div className={styles.SecFourImageColumn}>
                <img
                  className={styles.SecFourImgThree}
                  src="/SectionFiveImg.png"
                  alt="SectionFiveImgThree"
                />
              </div>
            </div>
          </div>
        </section>
        <section>Customer reviews</section>
        <section>
          {' '}
          <div className={styles.sectionEightTexts}>
            <h2 className={styles.sectionThreeBigHeader}>
              Everything you need to get <br /> security reviews done fast and{' '}
              <br />
              done right
            </h2>
            <a href="/#" className={styles.requestDemoButton}>
              Get a Demo
            </a>
          </div>
        </section>
      </main>
      <br />
      <footer>Footer</footer>
    </>
  );
}
