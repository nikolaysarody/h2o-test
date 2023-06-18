import { Contacts } from 'entities/Contacts/ui/Contacts';
import { EmployerSearch } from 'features/EmployerSearch';
import { EditMode } from 'features/EditMode/ui/EditMode';
import styles from './EmployersDatabase.module.scss';

export const EmployersDatabase = () => {
    return (
        <section className={styles.EmployersDatabase}>
            <h1 className={styles.header}>Общая база сотрудников</h1>
            <article className={styles.tools}>
                <Contacts />
                <EmployerSearch />
                <EditMode />
            </article>
        </section>
    );
};
