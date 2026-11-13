import type {JSX} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  to: string;
  linkLabel: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Platform independence',
    to: '/docs/introduction/features',
    linkLabel: 'Explore the features',
    Svg: require('@site/static/img/svg/agnostic.svg').default,
    description:
      'Write your application against a common API. Choose the processing engines that fit your data, infrastructure, and workload as your needs evolve.',
  },
  {
    title: 'Cross-platform execution',
    to: '/docs/guide/usage-examples',
    linkLabel: 'See pipeline examples',
    Svg: require('@site/static/img/svg/api.svg').default,
    description:
      'Combine Spark, Flink, PostgreSQL, and Java Streams in one pipeline. Run different steps on different engines without stitching together separate applications by hand.',
  },
  {
    title: 'Cost-based optimization',
    to: '/docs/guide/optimizer',
    linkLabel: 'Understand the optimizer',
    Svg: require('@site/static/img/svg/speed.svg').default,
    description:
      'Let Wayang compare execution plans across your available engines. Its cost model considers processing and data movement to select a plan for your workload.',
  },
  {
    title: 'Extensible architecture',
    to: '/docs/guide/adding-operators',
    linkLabel: 'Learn to add operators',
    Svg: require('@site/static/img/svg/extensibility.svg').default,
    description:
      'Adapt Wayang to your own processing needs. Add operators and platform integrations through its plugin architecture while keeping application logic separate from engine details.',
  },
];

function Feature({title, Svg, description, to, linkLabel}: FeatureItem) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Svg className={styles.featureSvg} aria-hidden="true" focusable="false" />
      </div>
      <Heading as="h3" className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} to={to}>
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features} aria-labelledby="wayang-capabilities">
      <div className="container">
        <Heading as="h2" id="wayang-capabilities" className={styles.sectionTitle}>
          One pipeline across your data engines
        </Heading>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
