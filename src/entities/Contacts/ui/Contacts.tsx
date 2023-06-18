import styles from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <p className={styles.amount}>{2345}</p>
            <p className={styles.title}>Контактов</p>
        </div>
    );
};
