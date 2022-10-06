import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor';
export default function Statistics({ stats }) {
    return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticsList label={stat.label} percentage={stat.percentage} />
          </li>
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