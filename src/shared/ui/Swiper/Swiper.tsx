import { useState } from 'react';
import SwiperIcon from 'shared/assets/icons/swiper.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Swiper.module.scss';

interface SwiperProps {
    swipe: () => void;
    isOpen: boolean;
}

export const Swiper = ({ swipe, isOpen }: SwiperProps) => {
    const [open, setOpen] = useState<boolean>(false);

    if (!isOpen) {
        return null;
    }
    return (
        <div className={styles.Swiper}>
            <SwiperIcon
                className={classNames(styles.icon, {}, [open ? styles.open : styles.close])}
                onClick={() => {
                    swipe();
                    setOpen((prev) => !prev);
                }}
            />
        </div>
    );
};
