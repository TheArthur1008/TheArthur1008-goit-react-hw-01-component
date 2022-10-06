import { Fragment } from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryList from './TransactionHistoryList';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.string}>
        {items?.map(item => (
          <Fragment key={item.id}>
            <TransactionHistoryList
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.any,
};
