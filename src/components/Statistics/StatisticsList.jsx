import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor';
export default function StatisticsList({ label, percentage }) {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  key: PropTypes.number,
};
