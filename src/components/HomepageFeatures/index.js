import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate id="page.home.academy.title" description="The homepage academy title">
        Academy
    </Translate>,
    img: 'img/home-academy.jpg',
    link: 'docs/academy/overview',
    description: (
      <Translate id="page.home.academy.description" description="The homepage academy description">
          Tutorials, tips, step-by-step guides to explore the full potential and learn the details of the interfaces and automations.
      </Translate>
    ),
  },
  {
    title: <Translate id="page.home.library.title" description="The homepage library title">
        Library
    </Translate>,
    img: 'img/home-library.jpg',
    link: 'docs/library/overview',
    description: (
      <Translate id="page.home.library.description" description="The homepage library description">
          All the low-code and polyglot programming resources to carry out the various implementations and integrations required in your project.
      </Translate>
    ),
  },
];

function Feature({img, title, link, description}) {
  return (
      <div className={clsx('col col--6')}>
        <div onClick={()=> window.location = link} style={{cursor: 'pointer'}}>
          <div style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              width: '100%',
              height: '400px',
              marginBottom: '20px'
          }}/>
          <div className="text--center padding-horiz--md">
            <Heading as="h3"><a href={link}>{title}</a></Heading>
            <p>{description}</p>
          </div>
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
