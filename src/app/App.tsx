import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { EmployersNavbar } from 'widgets/EmployersNavbar';

export const App = () => {
    return (
        <div className={classNames('app')}>
            <Sidebar />
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
};
