import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Focus on Trending',
    image: '/img/nsl-ai.jpg',
    description: (
      <>
        Empower your engineering journey with AI-powered tools. 
        Discover how artificial intelligence can unlock new possibilities for developers and teams.
      </>
    ),
    buttonLink: '/docs/ai/intro',
    buttonText: 'Get Started with AI',
  },
  {
    title: 'Focus on What Matters',
    image: '/img/nsl-aws.jpg',
    description: (
      <>
        Build, deploy, and scale cloud solutions with AWS. 
        Explore best practices, automation, and tools for modern cloud engineering.
      </>
    ),
    buttonLink: '/docs/aws/intro',
    buttonText: 'Get Started with AWS'
  },
  {
    title: 'Focus on Security',
    image: '/img/nsl-ai.jpg',
    description: (
      <>
        Strengthen your defenses with practical cybersecurity strategies. 
        Learn how to protect applications, data, and infrastructure from evolving threats.
      </>
    ),
    buttonLink: '/docs/security/intro',
    buttonText: 'Get Started with Security'
  },
];

function Feature({image, title, description, buttonLink, buttonText}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" alt={title} src={useBaseUrl(image)}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
      <Link className={clsx('button button--primary button--lg', styles.button)} to={useBaseUrl(buttonLink)}>
        {buttonText}
      </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
