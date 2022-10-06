import PropTypes from 'prop-types';
export default function StatisticsList({label, percentage }) {
    return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  key: PropTypes.number,
};