import { classNames } from 'shared/lib/helpers/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
        Страница не найдена
    </div>
);