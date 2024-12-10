import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={styles.profile}>
    <div className={styles.profile__content}>
      <img src={image} alt="User avatar" className={styles.profile__avatar} />
      <p className={styles.profile__name}>{name}</p>
      <p className={styles.profile__tag}>@{tag}</p>
      <p className={styles.profile__location}>{location}</p>
    </div>
    <ul className={styles.profile__list}>
      <li className={styles.profile__item}>
        <span className={styles.profile__label}>Followers</span>
        <span className={styles.profile__quantity}>{stats.followers}</span>
      </li>
      <li className={styles.profile__item}>
        <span className={styles.profile__label}>Views</span>
        <span className={styles.profile__quantity}>{stats.views}</span>
      </li>
      <li className={styles.profile__item}>
        <span className={styles.profile__label}>Likes</span>
        <span className={styles.profile__quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
