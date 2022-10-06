import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistoryList({type, amount, currency}) {
    return (
        <tr className={styles.transactionBody}>
            <td className={styles.string}>{type}</td>
            <td className={styles.string}>{amount}</td>
            <td className={styles.string}>{currency}</td>
        </tr>

    );
};

TransactionHistoryList.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.any,
    currency: PropTypes.string,
};
