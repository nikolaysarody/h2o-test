import {
    memo,
    useMemo,
    useState,
} from 'react';
import { EmployersType } from 'shared/assets/model';
import { Swiper } from 'shared/ui/Swiper/Swiper';
import { TableItem } from '../TableItem/TableItem';
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

    // массивы данных
    const employersNames = useMemo(() => currentEmployersList.map((item, index) => (
        <tr key={`${item.name}_${item.number}`}>
            <td>{index + 1}</td>
            <td className={styles.hoverable}>{item.name}</td>
        </tr>
    )), [currentEmployersList]);

    const employersInfos = useMemo(() => currentEmployersList.map((item) => (
        <tr key={`${item.id}_${item.number}`}>
            <td>{item.id}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.birthday}</td>
            <td>{item.metro}</td>
            <td>{item.address}</td>
        </tr>
    )), [currentEmployersList]);

    const employersBanks = useMemo(() => currentEmployersList.map((item) => (
        <tr key={`${item.bank}_${item.number}`}>
            <td>{item.bank}</td>
            <td>{item.card}</td>
        </tr>
    )), [currentEmployersList]);

    const employersDocs = useMemo(() => currentEmployersList.map((item) => (
        <tr key={`${item.citizenship}_${item.number}`}>
            <td>{item.citizenship}</td>
            <td>{item.passport}</td>
            <td>{item.issued}</td>
            <td>{item.validity_passport}</td>
            <td>{item.birthplace}</td>
            <td>{item.residence}</td>
            <td>{item.patent}</td>
            <td>{item.validity_patent}</td>
            <td>{item.snils}</td>
            <td>{item.inn}</td>
            <td>{item.medcard}</td>
        </tr>
    )), [currentEmployersList]);

    const employersHR = useMemo(() => currentEmployersList.map((item) => (
        <tr key={`${item.post}_${item.number}`}>
            <td>{item.post}</td>
            <td>{item.subdivision}</td>
            <td>{item.solution}</td>
            <td>{item.source}</td>
            <td>{item.date}</td>
            <td>{item.note}</td>
        </tr>
    )), [currentEmployersList]);

    // функции для сворачивания и разворачивания частей таблицы
    const swipeBank = () => {
        setBankOpen((prev) => !prev);
        setDocsOpen(false);
        setHROpen(false);
    };

    const swipeDocs = () => {
        setDocsOpen((prev) => !prev);
        setHROpen(false);
    };

    const swipeHR = () => {
        setHROpen((prev) => !prev);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <TableItem
                    head={{
                        cols: [
                            { rus: '№' },
                            { rus: 'Имя сотрудника', eng: 'name' },
                        ],
                        sortableIndex: [1],
                        sortableCallback: sortData,
                    }}
                    body={employersNames}
                />
            </div>
            <div className={styles.scroll}>
                <TableItem
                    head={{
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
                    }}
                    body={employersInfos}
                />
                <Swiper swipe={swipeBank} isOpen />
                {isBankOpen && (
                    <TableItem
                        head={{
                            title: 'Банковская информация',
                            cols: [
                                { rus: 'Банк', eng: 'bank' },
                                { rus: 'Номер карты' },
                            ],
                            sortableIndex: [0],
                            sortableCallback: sortData,
                        }}
                        body={employersBanks}
                    />
                )}
                <Swiper swipe={swipeDocs} isOpen={isBankOpen} />
                {isDocsOpen && (
                    <TableItem
                        head={{
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
                        }}
                        body={employersDocs}
                    />
                )}
                <Swiper swipe={swipeHR} isOpen={isDocsOpen} />
                {isHROpen && (
                    <TableItem
                        head={{
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
                        }}
                        body={employersHR}
                    />
                )}
            </div>
        </div>
    );
});
