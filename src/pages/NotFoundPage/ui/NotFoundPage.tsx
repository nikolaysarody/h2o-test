import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
        Страница не найдена
    </div>
);

export default NotFoundPage;
