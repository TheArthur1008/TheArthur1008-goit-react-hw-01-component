import { Fragment } from 'react';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';
export default function Statistics({ stats }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
          <Fragment key={stat.id}>
            <StatisticsList label={stat.label} percentage={stat.percentage} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.number,
};
