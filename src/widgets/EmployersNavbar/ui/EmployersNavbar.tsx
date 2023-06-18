import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from 'entities/Menu';
import { Profile } from 'entities/Profile';
import styles from './EmployersNavbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const EmployersNavbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <Menu />
            <Profile />
        </nav>
    );
};
