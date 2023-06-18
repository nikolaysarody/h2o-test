import profileImg from 'shared/assets/icons/profile_image.png';
import DownArrowIcon from 'shared/assets/icons/down_arrow.svg';
import styles from './Profile.module.scss';

export const Profile = () => {
    return (
        <section className={styles.Profile}>
            <img className={styles.img} src={profileImg} alt="Profile" />
            <article className={styles.info}>
                <h4>Kristina 🐰</h4>
                <p>менеджер продаж</p>
            </article>
            <DownArrowIcon className={styles.icon} />
        </section>
    );
};
