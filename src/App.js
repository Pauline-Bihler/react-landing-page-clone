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
        <section>Section 2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
