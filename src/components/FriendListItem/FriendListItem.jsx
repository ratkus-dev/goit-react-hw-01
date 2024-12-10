import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.friends__item}>
    <img
      className={styles.friends__avatar}
      src={avatar}
      alt={`${name} avatar`}
      width="48"
    />
    <p className={styles.friends__name}>{name}</p>
    <span
      className={`${styles.friends__status} ${isOnline ? styles.online : styles.offline}`}
    >
      {isOnline ? 'Online' : 'Offline'}
    </span>
  </li>
);

export default FriendListItem;
