import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

export const App: FC = () => {
    return (
        <div className={classNames('app')}>
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
