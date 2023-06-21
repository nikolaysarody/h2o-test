import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getEditMode } from 'entities/Table/model/selectors/getEditMode/getEditMode';
import styles from './TableBodyItem.module.scss';

interface TableBodyItemProps {
    item: string | number;
    validatable?: boolean;
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

export const TableBodyItem = ({ item, validatable }: TableBodyItemProps) => {
    const isEditMode = useSelector(getEditMode);
    const [isInputOpen, setInputOpen] = useState<boolean>(false);
    const [currentValue, setCurrentValue] = useState<string | number>(item);
    const data = () => {
        if (isInputOpen) {
            return (
                <input autoFocus value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
            );
        }
        return currentValue;
    };

    return (
        <td
            className={
                classNames(
                    styles.TableBodyItem,
                    { [styles.expired]: validatable && checkDate(parseDate(item as string)) },
                )
            }
            onClick={() => {
                if (isEditMode) {
                    setInputOpen(true);
                }
            }}
            onBlur={() => {
                if (isEditMode && isInputOpen) {
                    setInputOpen(false);
                }
            }}
        >
            {data()}
        </td>
    );
};
