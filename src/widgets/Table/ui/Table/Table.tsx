import {
    memo, useCallback, useEffect,
    useMemo,
    useState,
} from 'react';
import { Employers, EmployersType } from 'shared/assets/model';
import { Swiper } from 'shared/ui/Swiper/Swiper';
import { TableItem } from 'widgets/Table/ui/TableItem/TableItem';
import { Pagination } from 'features/Pagination';
import { useSelector } from 'react-redux';
import { getSearch } from 'widgets/Table/model/selectors/getSearch/getSearch';
import styles from './Table.module.scss';

const filterEmployers = (searchText: string, listOfEmployers: EmployersType[]) => {
    if (!searchText) {
        return listOfEmployers;
    }
    return listOfEmployers.filter(({ name }) => {
        return name.toLowerCase().includes(searchText.toLowerCase());
    });
};

export const Table = memo(() => {
    const [isBankOpen, setBankOpen] = useState<boolean>(false);
    const [isDocsOpen, setDocsOpen] = useState<boolean>(false);
    const [isHROpen, setHROpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [employersPerPage, setEmployersPerPage] = useState<number>(10);
    const [lastEmployerIndex, setLastEmployerIndex] = useState<number>(currentPage * employersPerPage);
    const [firstEmployerIndex, setFirstEmployerIndex] = useState<number>(lastEmployerIndex - employersPerPage);
    const [employersList, setEmployersList] = useState<EmployersType[]>(Employers);
    const [currentEmployer, setCurrentEmployer] = useState<EmployersType[]>(
        employersList.slice(firstEmployerIndex, lastEmployerIndex),
    );
    const [sortCol, setSortCol] = useState<string>('');
    const searchText = useSelector(getSearch);

    const returnEmployersToInitial = useCallback(() => {
        setCurrentEmployer(employersList.slice(firstEmployerIndex, lastEmployerIndex));
    }, [employersList, firstEmployerIndex, lastEmployerIndex]);

    const sortData = useCallback((rule: string) => {
        if (sortCol === '') {
            setSortCol(rule);
        } else {
            setSortCol('');
            returnEmployersToInitial();
        }
    }, [returnEmployersToInitial, sortCol]);

    const pageNumbers = useCallback(() => {
        const numbers = [];
        for (let i = 1; i <= Math.ceil(employersList.length / employersPerPage); i++) {
            numbers.push(i);
        }
        return numbers;
    }, [employersList.length, employersPerPage]);

    const paginate = (number: number) => setCurrentPage(number);

    // сортировка по столбцам
    useEffect(() => {
        setCurrentEmployer((prev) => {
            const copyData = prev.concat();
            const sortData = copyData.sort((a, b) => {
                return a[sortCol as keyof EmployersType] > b[sortCol as keyof EmployersType] ? 1 : -1;
            });
            return sortData;
        });
    }, [sortCol]);

    // установка корректных данных относительно страницы
    useEffect(() => {
        setLastEmployerIndex(currentPage * employersPerPage);
    }, [currentPage, employersPerPage]);

    useEffect(() => {
        setFirstEmployerIndex(lastEmployerIndex - employersPerPage);
    }, [employersPerPage, lastEmployerIndex]);

    useEffect(() => {
        setCurrentEmployer(employersList.slice(firstEmployerIndex, lastEmployerIndex));
    }, [employersList, firstEmployerIndex, lastEmployerIndex]);

    // поиск
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredEmployers = filterEmployers(searchText, Employers);
            setEmployersList(filteredEmployers);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [employersList, searchText]);

    // массивы данных
    const employersNames = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.name}_${item.number}`}>
            <td>{index + 1}</td>
            <td className={styles.hoverable}>{item.name}</td>
        </tr>
    )), [currentEmployer]);

    const employersInfos = useMemo(() => currentEmployer.map((item) => (
        <tr key={`${item.id}_${item.number}`}>
            <td>{item.id}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.birthday}</td>
            <td>{item.metro}</td>
            <td>{item.address}</td>
        </tr>
    )), [currentEmployer]);

    const employersBanks = useMemo(() => currentEmployer.map((item) => (
        <tr key={`${item.bank}_${item.number}`}>
            <td>{item.bank}</td>
            <td>{item.card}</td>
        </tr>
    )), [currentEmployer]);

    const employersDocs = useMemo(() => currentEmployer.map((item) => (
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
    )), [currentEmployer]);

    const employersHR = useMemo(() => currentEmployer.map((item) => (
        <tr key={`${item.post}_${item.number}`}>
            <td>{item.post}</td>
            <td>{item.subdivision}</td>
            <td>{item.solution}</td>
            <td>{item.source}</td>
            <td>{item.date}</td>
            <td>{item.note}</td>
        </tr>
    )), [currentEmployer]);

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
        <div className={styles.container}>
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
                <div className={styles.tableScroll}>
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
            <Pagination
                employersPerPage={employersPerPage}
                setEmployersPerPage={(item) => setEmployersPerPage(item)}
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                paginate={paginate}
                firstEmployerIndex={firstEmployerIndex}
                lastEmployerIndex={lastEmployerIndex}
                totalEmployers={Employers.length}
            />
        </div>
    );
});
