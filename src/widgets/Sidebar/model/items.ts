import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import EmployersIcon from 'shared/assets/icons/people.svg';
import BoxIcon from 'shared/assets/icons/box.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import ChartIcon from 'shared/assets/icons/chart.svg';
import MoneyIcon from 'shared/assets/icons/money.svg';
import SettingsIcon from 'shared/assets/icons/settings.svg';
import TableIcon from 'shared/assets/icons/table.svg';

export interface SidebarItemType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.calendar,
        Icon: CalendarIcon,
    },
    {
        path: RoutePath.table,
        Icon: TableIcon,
    },
    {
        path: RoutePath.box,
        Icon: BoxIcon,
    },
    {
        path: RoutePath.employers,
        Icon: EmployersIcon,
    },
    {
        path: RoutePath.money,
        Icon: MoneyIcon,
    },
    {
        path: RoutePath.chart,
        Icon: ChartIcon,
    },
    {
        path: RoutePath.settings,
        Icon: SettingsIcon,
    },
];
