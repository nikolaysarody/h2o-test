import { classNames } from 'shared/lib/classNames/classNames';
import { EmployersNavbar } from 'widgets/EmployersNavbar';
import styles from './EmployersPage.module.scss';

const EmployersPage = () => {
    return (
        <div className={classNames(styles.EmployersPage)}>
            <EmployersNavbar />
        </div>
    );
};

export default EmployersPage;
