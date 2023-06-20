import { Contacts } from 'entities/Contacts';
import { EmployerSearch } from 'features/EmployerSearch';
import { EditMode } from 'features/EditMode';
import { Table } from 'widgets/Table';
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
                <Table />
            </article>
        </section>
    );
};
