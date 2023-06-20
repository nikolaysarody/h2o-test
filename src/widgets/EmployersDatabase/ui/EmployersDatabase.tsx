import { Contacts } from 'entities/Contacts';
import { EmployerSearch } from 'features/EmployerSearch';
import { EditMode } from 'features/EditMode';
import { EmployersTable } from 'widgets/EmployersTable';
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
            <article className={styles.table}>
                <EmployersTable />
            </article>
        </section>
    );
};
