import { memo } from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
    return (
        <li className={styles.item}>
            <AppLink
                to={item.path}
                className={classNames(styles.SideBarItem)}
                activeClassName={styles.active}
            >
                <item.Icon />
            </AppLink>
        </li>
    );
});
