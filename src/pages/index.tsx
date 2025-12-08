import clsx from 'clsx';
import {useMemo} from 'react';
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
        </main>
      </Layout>
    </>
  );
}
