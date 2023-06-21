import {
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { Employers, EmployersType } from 'shared/assets/model';
import { Pagination } from 'features/Pagination';
import { getSearch } from 'entities/Table/model/selectors/getSearch/getSearch';
import { useSelector } from 'react-redux';
import { Table } from 'entities/Table/ui/Table/Table';
import styles from './EmployersTable.module.scss';

const filterEmployers = (searchText: string, listOfEmployers: EmployersType[]) => {
    if (!searchText) {
        return listOfEmployers;
    }
    return listOfEmployers.filter(({ name }) => {
        return name.toLowerCase().includes(searchText.toLowerCase());
    });
};

export const EmployersTable = memo(() => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [employersPerPage, setEmployersPerPage] = useState<number>(10);
    const [lastEmployerIndex, setLastEmployerIndex] = useState<number>(currentPage * employersPerPage);
    const [firstEmployerIndex, setFirstEmployerIndex] = useState<number>(lastEmployerIndex - employersPerPage);
    const [employersList, setEmployersList] = useState<EmployersType[]>(Employers);
    const [currentEmployers, setCurrentEmployers] = useState<EmployersType[]>(
        employersList.slice(firstEmployerIndex, lastEmployerIndex),
    );
    const [sortCol, setSortCol] = useState<string>('');
    const searchText = useSelector(getSearch);

    const returnEmployersToInitial = useCallback(() => {
        setCurrentEmployers(employersList.slice(firstEmployerIndex, lastEmployerIndex));
    }, [employersList, firstEmployerIndex, lastEmployerIndex]);

    // сортировка по столбцам
    const sortData = useCallback((rule: string) => {
        if (sortCol === '') {
            setSortCol(rule);
        } else {
            setSortCol('');
            returnEmployersToInitial();
        }
    }, [returnEmployersToInitial, sortCol]);

    useEffect(() => {
        setCurrentEmployers((prev) => {
            const copyData = prev.concat();
            const sortData = copyData.sort((a, b) => {
                return a[sortCol as keyof EmployersType] > b[sortCol as keyof EmployersType] ? 1 : -1;
            });
            return sortData;
        });
    }, [sortCol]);

    // пагинация
    const pageNumbers = useCallback(() => {
        const numbers = [];
        for (let i = 1; i <= Math.ceil(employersList.length / employersPerPage); i++) {
            numbers.push(i);
        }
        return numbers;
    }, [employersList.length, employersPerPage]);

    const paginate = (number: number) => setCurrentPage(number);

    useEffect(() => {
        setLastEmployerIndex(currentPage * employersPerPage);
    }, [currentPage, employersPerPage]);

    useEffect(() => {
        setFirstEmployerIndex(lastEmployerIndex - employersPerPage);
    }, [employersPerPage, lastEmployerIndex]);

    useEffect(() => {
        setCurrentEmployers(employersList.slice(firstEmployerIndex, lastEmployerIndex));
    }, [employersList, firstEmployerIndex, lastEmployerIndex]);

    // поиск
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredEmployers = filterEmployers(searchText, Employers);
            setEmployersList(filteredEmployers);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [employersList, searchText]);

    return (
        <div className={styles.container}>
            <Table currentEmployersList={currentEmployers} sortData={sortData} />
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
