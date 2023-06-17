import { memo, useMemo } from 'react';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import LogoIcon from 'shared/assets/icons/logo.svg';
import styles from './Sidebar.module.scss';

export const Sidebar = memo(() => {
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            key={item.path}
        />
    )), []);

    return (
        <nav className={styles.Sidebar}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <div className={styles.items}>
                {itemsList}
            </div>
        </nav>
    );
});
