import {
    memo, useCallback, useEffect,
    useMemo,
    useState,
} from 'react';
import { Employers, EmployersType } from 'shared/assets/model';
import { Swiper } from 'shared/ui/Swiper/Swiper';
import { TableItem } from 'widgets/Table/ui/TableItem/TableItem';
import { Pagination } from 'features/Pagination';
import styles from './Table.module.scss';

export const Table = memo(() => {
    const [isBankOpen, setBankOpen] = useState<boolean>(false);
    const [isDocsOpen, setDocsOpen] = useState<boolean>(false);
    const [isHROpen, setHROpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [employersPerPage, setEmployersPerPage] = useState<number>(10);
    const [lastEmployerIndex, setLastEmployerIndex] = useState<number>(currentPage * employersPerPage);
    const [firstEmployerIndex, setFirstEmployerIndex] = useState<number>(lastEmployerIndex - employersPerPage);
    const [currentEmployer, setCurrentEmployer] = useState<EmployersType[]>(
        Employers.slice(firstEmployerIndex, lastEmployerIndex),
    );

    const pageNumbers = useCallback(() => {
        const numbers = [];
        for (let i = 1; i <= Math.ceil(Employers.length / employersPerPage); i++) {
            numbers.push(i);
        }
        return numbers;
    }, [employersPerPage]);

    const paginate = (number: number) => setCurrentPage(number);

    useEffect(() => {
        setLastEmployerIndex(currentPage * employersPerPage);
    }, [currentPage, employersPerPage]);

    useEffect(() => {
        setFirstEmployerIndex(lastEmployerIndex - employersPerPage);
    }, [employersPerPage, lastEmployerIndex]);

    useEffect(() => {
        setCurrentEmployer(Employers.slice(firstEmployerIndex, lastEmployerIndex));
    }, [firstEmployerIndex, lastEmployerIndex]);

    const employersNames = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.name}_${item.number}`}>
            <td>{item.number}</td>
            <td className={styles.hoverable}>{item.name}</td>
        </tr>
    )), [currentEmployer]);

    const employersInfos = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.id}_${index}`}>
            <td>{item.id}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.birthday}</td>
            <td>{item.metro}</td>
            <td>{item.address}</td>
        </tr>
    )), [currentEmployer]);

    const employersBanks = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.bank}_${index}`}>
            <td>{item.bank}</td>
            <td>{item.card}</td>
        </tr>
    )), [currentEmployer]);

    const employersDocs = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.citizenship}_${index}`}>
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

    const employersHR = useMemo(() => currentEmployer.map((item, index) => (
        <tr key={`${item.post}_${index}`}>
            <td>{item.post}</td>
            <td>{item.subdivision}</td>
            <td>{item.solution}</td>
            <td>{item.source}</td>
            <td>{item.date}</td>
            <td>{item.note}</td>
        </tr>
    )), [currentEmployer]);

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
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Имя сотрудника</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employersNames}
                        </tbody>
                    </table>
                </div>
                <div className={styles.tableScroll}>
                    <TableItem
                        head={{
                            title: 'Основная информация',
                            cols: [
                                'ID',
                                'Номер телефона',
                                'Пол',
                                'Дата рождения',
                                'Метро',
                                'Адрес проживания',
                            ],
                        }}
                        body={employersInfos}
                    />
                    <Swiper swipe={swipeBank} isOpen />
                    {isBankOpen && (
                        <TableItem
                            head={{
                                title: 'Банковская информация',
                                cols: [
                                    'Банк',
                                    'Номер карты',
                                ],
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
                                    'Гражданство',
                                    'Паспорт',
                                    'Кем выдан',
                                    'Срок действия',
                                    'Место рождения',
                                    'Адрес прописки',
                                    'Патент',
                                    'Срок действия',
                                    'СНИЛС',
                                    'ИНН',
                                    'Мед. книжка',
                                ],
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
                                    'Должность',
                                    'Подразделение',
                                    'Решение',
                                    'Источник',
                                    'Дата',
                                    'Примечание',
                                ],
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
