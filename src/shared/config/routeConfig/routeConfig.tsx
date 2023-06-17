import { RouteProps } from 'react-router-dom';
import { EmployersPage } from 'pages/EmployersPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    EMPLOYERS = 'employers',
    BOX = 'box',
    CALENDAR = 'calendar',
    CHART = 'chart',
    MONEY = 'money',
    SETTINGS = 'settings',
    TABLE = 'table',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.EMPLOYERS]: '/',
    [AppRoutes.BOX]: '/box',
    [AppRoutes.CALENDAR]: '/calendar',
    [AppRoutes.CHART]: '/chart',
    [AppRoutes.MONEY]: '/money',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.TABLE]: '/table',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.EMPLOYERS]: {
        path: RoutePath.employers,
        element: <EmployersPage />,
    },
    [AppRoutes.BOX]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.CALENDAR]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.CHART]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.MONEY]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.TABLE]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
