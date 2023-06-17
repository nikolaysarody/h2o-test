import { classNames } from 'shared/lib/classNames/classNames';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { useMemo, useState } from 'react';
import { MenuItem } from 'entities/Menu/ui/MenuItem/MenuItem';
import { MenuItemsList } from 'entities/Menu/model/items';
import styles from './Menu.module.scss';

interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    const [activeItem, setActiveItem] = useState<number>(1);
    const itemsList = useMemo(() => MenuItemsList.map((item) => (
        <MenuItem
            item={item}
            key={item.text}
            isActive={activeItem === item.id}
            setActive={setActiveItem}
        />
    )), [activeItem]);

    return (
        <div className={classNames(styles.Menu, {}, [className])}>
            <div className={styles.navigation}>
                <button
                    type="button"
                    className={classNames(styles.icon, {}, [styles.left])}
                    onClick={() => {
                        if (activeItem > 0) {
                            setActiveItem((prev) => prev - 1);
                        }
                    }}
                >
                    <ArrowIcon />
                </button>
                <button
                    type="button"
                    className={classNames(styles.icon, {}, [styles.right])}
                    onClick={() => {
                        if (activeItem < MenuItemsList.length - 1) {
                            setActiveItem((prev) => prev + 1);
                        }
                    }}
                >
                    <ArrowIcon />
                </button>
            </div>
            <ul className={styles.menuList}>
                {itemsList}
            </ul>
        </div>
    );
};
