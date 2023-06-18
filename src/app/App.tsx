import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

export const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <Sidebar />
                <main className="content-page">
                    <AppRouter />
                </main>
            </div>
        </div>
    );
};
