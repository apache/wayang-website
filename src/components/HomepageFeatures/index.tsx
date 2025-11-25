import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Platform independence ',
    Svg: require('@site/static/img/svg/agnostic.svg').default,
    description: (
      <>
        Change one line of code and move applications across different data processing engines
      </>
    ),
  },
  {
    title: 'Cross-platform task execution',
    Svg: require('@site/static/img/svg/api.svg').default,
    description: (
      <>
        Mix Apache Spark, PostgreSQL, Apache Flink, Java Streams, JDBC and more in one pipeline 
      </>
    ),
  },
  {
    title: 'Automated platform selection',
    Svg: require('@site/static/img/svg/speed.svg').default,
    description: (
      <>
      Let the optimizer choose the best platform combination for each task based on cost models to improve performance
      </>
    ),
  },
  {
    title: 'Extensible architecture',
    Svg: require('@site/static/img/svg/extensibility.svg').default,
    description: (
      <>
      Need a new platform or operator? Extend Wayang easily with few lines of code
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
