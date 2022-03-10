import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Accounts',
    Svg: require('../../static/img/accounts.svg').default,
    description: (
      <>
        <a href='docs/authentication/' className='button button--primary'>Authenticate a user</a>
      </>
    ),
  },
  {
    title: 'Comics',
    Svg: require('../../static/img/comics.svg').default,
    description: (
      <>
        <a href='docs/comics/series' className='button button--primary'>Access comic data</a>
      </>
    ),
  },
  {
    title: 'Cartoons',
    Svg: require('../../static/img/cartoons.svg').default,
    description: (
      <>
        <a href='docs/cartoons/series' className='button button--primary'>Access cartoon data</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
