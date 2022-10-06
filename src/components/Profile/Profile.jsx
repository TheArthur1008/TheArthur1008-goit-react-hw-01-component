import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width="200px"
        />
        <p className={styles.description}>{username}</p>
        <p className={styles.description}>{tag}</p>
        <p className={styles.description}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};