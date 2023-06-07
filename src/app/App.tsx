import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

export const App: FC = () => {
    return (
        <div className={classNames('app')}>
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
};
