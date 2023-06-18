import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

export const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <Sidebar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};
