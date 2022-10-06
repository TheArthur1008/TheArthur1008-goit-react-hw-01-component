import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <div className={isOnline ? styles.isOnline : styles.isOffline}></div>

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
