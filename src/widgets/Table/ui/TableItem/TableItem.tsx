import { memo, ReactNode, useState } from 'react';
import DropdownIcon from 'shared/assets/icons/dropdown.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './TableItem.module.scss';

interface TableItemProps {
    head: {
        title?: string;
        cols: {
            rus: string;
            eng?: string;
        }[];
        sortableIndex: number[];
        sortableCallback: (key: string) => void;
    };
    body: ReactNode[];
}

export const TableItem = memo(({ head, body }: TableItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <table className={styles.TableItem}>
            <thead>
                {head.title && (
                    <tr>
                        <th colSpan={head.cols.length} className={styles.thCenter}>{head.title}</th>
                    </tr>
                )}
                <tr>
                    {head.cols.map((item, index) => (
                        <th
                            key={`${item.rus}_${index}`}
                            onClick={() => {
                                if (head.sortableIndex.some((item) => item === index) && item.eng) {
                                    head.sortableCallback(item.eng);
                                }
                                setIsOpen((prev) => !prev);
                            }}
                            className={head.sortableIndex.some((item) => item === index) ? styles.sortable : ''}
                        >
                            {item.rus}
                            {head.sortableIndex.some((item) => item === index)
                                && (
                                    <DropdownIcon
                                        className={classNames(styles.icon, {}, [isOpen ? styles.open : styles.close])}
                                    />
                                )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
});
