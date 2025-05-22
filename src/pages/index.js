import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                <Translate id="page.home.title" description="The homepage title">
                    Polyglot Low-Code Platform
                </Translate>
            </Heading>
            <p className="hero__subtitle">
                <Translate id="page.home.subtitle.1" description="The homepage subtitle 1">
                    Rapid development with high performance, multiple programming languages and multiple databases.
                </Translate>
            </p>
            <p className="hero__subtitle">
                <Translate id="page.home.subtitle.2" description="The homepage subtitle 2">
                    Automatic backoffice generation with intuitive data modeling, diagram and queries.
                </Translate>
            </p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/get-started/installation">
                    <Translate id="page.home.button" description="The homepage button">
                        Netuno Installation
                    </Translate>
                </Link>
            </div>
        </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Netuno`}
            description="Netuno general documentation.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
