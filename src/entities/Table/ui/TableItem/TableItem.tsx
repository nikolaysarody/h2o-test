import { memo, useState } from 'react';
import DropdownIcon from 'shared/assets/icons/dropdown.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './TableItem.module.scss';

export interface TableItemBodyProps {
    list: (string | number)[];
    id: number;
    validatableIndex?: number[];
}

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
    body: TableItemBodyProps[]
}

const checkDate = (date: Date) => {
    return new Date() > date;
};

const parseDate = (value: string) => {
    return new Date(
        +value.split('.')[2],
        +value.split('.')[1],
        +value.split('.')[0],
    );
};

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
                {body.map((row, index) => (
                    <tr key={`${row.list[1]}_${row.id}_${index}`}>
                        {row.list.map((item, i) => (
                            <td
                                key={`${item}_${row.id}_${index}_${i}`}
                                className={
                                    row.validatableIndex
                                    && row.validatableIndex.includes(i)
                                    && checkDate(parseDate(item as string))
                                        ? styles.expired : ''
                                }
                            >
                                {item}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
});
