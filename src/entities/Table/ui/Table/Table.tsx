import {
    memo, useCallback,
    useMemo,
    useState,
} from 'react';
import { EmployersType } from 'shared/assets/model';
import { Swiper } from 'shared/ui/Swiper/Swiper';
import { TableItem, TableItemBodyProps } from '../TableItem/TableItem';
import styles from './Table.module.scss';

interface TableProps {
    currentEmployersList: EmployersType[];
    sortData: (rule: string) => void;
}

export const Table = memo((props: TableProps) => {
    const {
        currentEmployersList,
        sortData,
    } = props;
    const [isBankOpen, setBankOpen] = useState<boolean>(false);
    const [isDocsOpen, setDocsOpen] = useState<boolean>(false);
    const [isHROpen, setHROpen] = useState<boolean>(false);

    // заголовки

    const headerNames = {
        cols: [
            { rus: '№' },
            { rus: 'Имя сотрудника', eng: 'name' },
        ],
        sortableIndex: [1],
        sortableCallback: sortData,
    };

    const headerInfos = {
        title: 'Основная информация',
        cols: [
            { rus: 'ID' },
            { rus: 'Номер телефона' },
            { rus: 'Пол', eng: 'gender' },
            { rus: 'Дата рождения' },
            { rus: 'Метро', eng: 'metro' },
            { rus: 'Адрес проживания' },
        ],
        sortableIndex: [2, 4],
        sortableCallback: sortData,
    };

    const headerBanks = {
        title: 'Банковская информация',
        cols: [
            { rus: 'Банк', eng: 'bank' },
            { rus: 'Номер карты' },
        ],
        sortableIndex: [0],
        sortableCallback: sortData,
    };

    const headerDocs = {
        title: 'Документы сотрудника',
        cols: [
            { rus: 'Гражданство', eng: 'citizenship' },
            { rus: 'Паспорт' },
            { rus: 'Кем выдан' },
            { rus: 'Срок действия' },
            { rus: 'Место рождения' },
            { rus: 'Адрес прописки' },
            { rus: 'Патент', eng: 'patent' },
            { rus: 'Срок действия' },
            { rus: 'СНИЛС' },
            { rus: 'ИНН' },
            { rus: 'Мед. книжка' },
        ],
        sortableIndex: [0, 6],
        sortableCallback: sortData,
    };

    const headerHR = {
        title: 'Информация от HR',
        cols: [
            { rus: 'Должность', eng: 'post' },
            { rus: 'Подразделение', eng: 'subdivision' },
            { rus: 'Решение', eng: 'solution' },
            { rus: 'Источник' },
            { rus: 'Дата' },
            { rus: 'Примечание' },
        ],
        sortableIndex: [0, 1, 2],
        sortableCallback: sortData,
    };

    // массивы данных
    const employersNames: TableItemBodyProps[] = useMemo(() => currentEmployersList.map(
        (item, index) => {
            return {
                list: [
                    index + 1,
                    item.name,
                ],
                id: item.number,
            };
        },
    ), [currentEmployersList]);

    const employersInfos: TableItemBodyProps[] = useMemo(() => currentEmployersList.map(
        (item) => {
            return {
                list: [
                    item.id,
                    item.phone,
                    item.gender,
                    item.birthday,
                    item.metro,
                    item.address,
                ],
                id: item.number,
            };
        },
    ), [currentEmployersList]);

    const employersBanks: TableItemBodyProps[] = useMemo(() => currentEmployersList.map(
        (item) => {
            return {
                list: [
                    item.bank,
                    item.card,
                ],
                id: item.number,
            };
        },
    ), [currentEmployersList]);

    const employersDocs: TableItemBodyProps[] = useMemo(() => currentEmployersList.map(
        (item) => {
            return {
                list: [
                    item.citizenship,
                    item.passport,
                    item.issued,
                    item.validityPassport,
                    item.birthplace,
                    item.residence,
                    item.patent,
                    item.validityPatent,
                    item.snils,
                    item.inn,
                    item.medcard,
                ],
                id: item.number,
                validatableIndex: [3, 7],
            };
        },
    ), [currentEmployersList]);

    const employersHR: TableItemBodyProps[] = useMemo(() => currentEmployersList.map((item) => {
        return {
            list: [
                item.post,
                item.subdivision,
                item.solution,
                item.source,
                item.date,
                item.note,
            ],
            id: item.number,
        };
    }), [currentEmployersList]);

    // функции для сворачивания и разворачивания частей таблицы
    const swipeBank = useCallback(() => {
        setBankOpen((prev) => !prev);
        setDocsOpen(false);
        setHROpen(false);
    }, []);

    const swipeDocs = useCallback(() => {
        setDocsOpen((prev) => !prev);
        setHROpen(false);
    }, []);

    const swipeHR = useCallback(() => {
        setHROpen((prev) => !prev);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <TableItem
                    head={headerNames}
                    body={employersNames}
                />
            </div>
            <div className={styles.scroll}>
                <TableItem
                    head={headerInfos}
                    body={employersInfos}
                />
                <Swiper swipe={swipeBank} isOpen />
                {isBankOpen && (
                    <TableItem
                        head={headerBanks}
                        body={employersBanks}
                    />
                )}
                <Swiper swipe={swipeDocs} isOpen={isBankOpen} />
                {isDocsOpen && (
                    <TableItem
                        head={headerDocs}
                        body={employersDocs}
                    />
                )}
                <Swiper swipe={swipeHR} isOpen={isDocsOpen} />
                {isHROpen && (
                    <TableItem
                        head={headerHR}
                        body={employersHR}
                    />
                )}
            </div>
        </div>
    );
});
