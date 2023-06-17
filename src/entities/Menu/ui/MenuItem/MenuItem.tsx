import { MenuItemType } from 'entities/Menu/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
    item: MenuItemType;
    isActive: boolean;
    setActive: (index: number) => void;
}

export const MenuItem = ({ item, isActive, setActive }: MenuItemProps) => {
    return (
        <li
            className={classNames(styles.MenuItem, { [styles.active]: isActive })}
            onClick={() => setActive(item.id)}
        >
            <span>{item.text}</span>
        </li>
    );
};
