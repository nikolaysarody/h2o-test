import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './styles/index.scss';

export const App: FC = () => (
    <div className={classNames('app')}>
        <h1>Hello world</h1>
    </div>
);
