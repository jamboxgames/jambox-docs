import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Convert your Single Player Games to Competitive Games',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Jambox Game's Arena SDK helps you quickly convert your single player games into competitive games. No rewrire required. 
      </>
    ),
  },
  {
    title: 'Focus on Your Name',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Your game is alreayd awesome, stop worrying about scaling servers, CCUs etc.
      </>
    ),
  },
  {
    title: 'Input Replay System SDK',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use the Arena's SDKs Input Replay system, to authenticaly replay an opponent.
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
