import clsx from 'clsx';
import {useMemo, type JSX} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const OG_TITLE = 'Apache Wayang | Cross-Platform Data Processing';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/apache/incubator-wayang">
            GitHub
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/guide/getting-started">
            Get Started
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://wayang.apache.org/#organization',
          name: 'Apache Wayang',
          alternateName: 'Wayang',
          url: 'https://wayang.apache.org/',
          slogan: siteConfig.tagline,
          logo: 'https://wayang.apache.org/img/wayang.png',
          sameAs: [
            'https://github.com/apache/incubator-wayang',
            'https://www.youtube.com/@apachewayang',
            'https://www.linkedin.com/company/apachewayang',
            'https://twitter.com/apachewayang',
            'https://www.reddit.com/r/ApacheWayang',
          ],
          parentOrganization: {
            '@type': 'Organization',
            name: 'The Apache Software Foundation',
            url: 'https://www.apache.org/',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://wayang.apache.org/#website',
          url: 'https://wayang.apache.org/',
          name: siteConfig.title,
          description: siteConfig.tagline,
          inLanguage: 'en',
          publisher: {
            '@id': 'https://wayang.apache.org/#organization',
          },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://wayang.apache.org/#software',
          name: 'Apache Wayang',
          applicationCategory: 'DataManagementApplication',
          description:
            'Open-source cross-platform data processing engine that unifies execution across Apache Spark, Flink, and other backends.',
          operatingSystem: 'Cross-platform',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          license: 'https://www.apache.org/licenses/LICENSE-2.0',
          downloadUrl: 'https://wayang.apache.org/docs/start/download',
          softwareHelp: {
            '@type': 'CreativeWork',
            url: 'https://wayang.apache.org/docs/guide/getting-started',
          },
          publisher: {
            '@id': 'https://wayang.apache.org/#organization',
          },
        },
      ],
    }),
    [siteConfig.tagline, siteConfig.title],
  );
  return (
    <>
      <Layout
        description={siteConfig.tagline}>
        <Head>
          <title>{OG_TITLE}</title>
          <meta property="og:title" content={OG_TITLE} />
          <meta name="twitter:title" content={OG_TITLE} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
          />
        </Head>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <section className="container padding-vert--xl" aria-labelledby="explore-wayang">
            <Heading as="h2" id="explore-wayang">Explore Apache Wayang</Heading>
            <div className="row">
              <div className="col col--4 margin-bottom--lg">
                <Heading as="h3">Build a pipeline</Heading>
                <p>Start with working examples, explore the APIs, and review performance results.</p>
                <ul>
                  <li><Link to="/docs/guide/usage-examples">Usage examples</Link></li>
                  <li><Link to="/docs/guide/api-documentation">API documentation</Link></li>
                  <li><Link to="/docs/introduction/benchmark">Wayang benchmarks</Link></li>
                </ul>
              </div>
              <div className="col col--4 margin-bottom--lg">
                <Heading as="h3">Learn from the community</Heading>
                <p>Read project news, technical articles, and experiences from Wayang users.</p>
                <ul>
                  <li><Link to="/blog">Apache Wayang blog</Link></li>
                  <li><Link to="/docs/community/resources">Articles and community resources</Link></li>
                  <li><Link to="/docs/community/join">Join the Wayang community</Link></li>
                </ul>
              </div>
              <div className="col col--4 margin-bottom--lg">
                <Heading as="h3">Find support</Heading>
                <p>Ask the community for help, find commercial providers, or report a security issue.</p>
                <ul>
                  <li><Link to="/docs/community/mailinglist">Community support and mailing lists</Link></li>
                  <li><Link to="/docs/community/commercial-support">Commercial support and integration</Link></li>
                  <li><Link to="/docs/community/security">Security and vulnerability reporting</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
