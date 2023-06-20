import { classNames } from 'shared/lib/classNames/classNames';
import { EmployersNavbar } from 'widgets/EmployersNavbar';
import { Contacts } from 'entities/Contacts';
import { EmployerSearch } from 'features/EmployerSearch';
import { EditMode } from 'features/EditMode';
import { Table } from 'widgets/Table';
import styles from './EmployersPage.module.scss';

const EmployersPage = () => {
    return (
        <main className={classNames(styles.EmployersPage)}>
            <EmployersNavbar />
            <section className={styles.database}>
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
        </main>
    );
};

export default EmployersPage;
