import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from 'entities/Menu/ui/Menu/Menu';
import styles from './EmployersNavbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const EmployersNavbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Menu />
        </div>
    );
};
