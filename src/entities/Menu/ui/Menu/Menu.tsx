import {
    memo,
    useCallback, useEffect,
    useMemo, useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { MenuItem } from 'entities/Menu/ui/MenuItem/MenuItem';
import { MenuItemsList } from 'entities/Menu/model/items';
import { MenuNavigation } from 'entities/Menu/ui/MenuNavigation/ui/MenuNavigation';
import styles from './Menu.module.scss';

interface MenuProps {
    className?: string;
}

export const Menu = memo(({ className }: MenuProps) => {
    const [activeItem, setActiveItem] = useState<number>(1);
    const navMenuRef = useRef<HTMLUListElement>(null);

    const setActiveHandler = useCallback((value) => {
        setActiveItem(value);
    }, []);

    const itemsList = useMemo(() => MenuItemsList.map((item) => (
        <MenuItem
            item={item}
            key={item.text}
            isActive={activeItem === item.id}
            setActive={setActiveHandler}
        />
    )), [activeItem, setActiveHandler]);

    useEffect(() => {
        if (navMenuRef.current !== null) {
            if (activeItem === 3) {
                navMenuRef.current.style.right = '92px';
            }
            if (activeItem === 0) {
                navMenuRef.current.style.right = '0';
            }
        }
    }, [activeItem]);

    return (
        <header className={classNames(styles.Menu, {}, [className])}>
            <MenuNavigation activeItem={activeItem} setActiveItem={setActiveHandler} />
            <div className={styles.wrapper}>
                <ul
                    role="navigation"
                    className={styles.menuList}
                    ref={navMenuRef}
                >
                    {itemsList}
                </ul>
            </div>
        </header>
    );
});
