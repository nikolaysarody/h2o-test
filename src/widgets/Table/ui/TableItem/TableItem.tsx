import { memo, ReactNode } from 'react';
import styles from './TableItem.module.scss';

interface TableItemProps {
    head: {
        title: string;
        cols: string[];
    };
    body: ReactNode[];
}

export const TableItem = memo(({ head, body }: TableItemProps) => {
    return (
        <table className={styles.TableItem}>
            <thead>
                <tr>
                    <th colSpan={head.cols.length} className={styles.thCenter}>{head.title}</th>
                </tr>
                <tr>
                    {head.cols.map((item, index) => (
                        <th>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
});
