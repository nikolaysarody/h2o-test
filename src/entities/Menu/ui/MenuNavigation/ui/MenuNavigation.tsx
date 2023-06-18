import { classNames } from 'shared/lib/classNames/classNames';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { MenuItemsList } from 'entities/Menu/model/items';
import styles from './MenuNavigation.module.scss';

interface MenuNavigationProps {
    activeItem: number;
    setActiveItem: (item: number) => void;
}

export const MenuNavigation = ({ activeItem, setActiveItem }: MenuNavigationProps) => {
    return (
        <div className={styles.navigation}>
            <button
                type="button"
                className={classNames(styles.icon, {}, [styles.left])}
                onClick={() => {
                    if (activeItem > 0) {
                        setActiveItem(activeItem - 1);
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
                        setActiveItem(activeItem + 1);
                    }
                }}
            >
                <ArrowIcon />
            </button>
        </div>
    );
};
