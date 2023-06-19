import { Employers } from 'shared/assets/model';
import styles from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <p className={styles.amount}>{Employers.length}</p>
            <p className={styles.title}>Контактов</p>
        </div>
    );
};
