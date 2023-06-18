import { classNames } from 'shared/lib/classNames/classNames';
import { EmployersNavbar } from 'widgets/EmployersNavbar';
import { EmployersDatabase } from 'widgets/EmployersDatabase';
import styles from './EmployersPage.module.scss';

const EmployersPage = () => {
    return (
        <main className={classNames(styles.EmployersPage)}>
            <EmployersNavbar />
            <EmployersDatabase />
        </main>
    );
};

export default EmployersPage;
