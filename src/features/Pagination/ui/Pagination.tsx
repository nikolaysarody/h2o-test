import { memo } from 'react';
import PaginateIcon from 'shared/assets/icons/paginate_arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Pagination.module.scss';

interface PaginationProps {
    employersPerPage: number;
    setEmployersPerPage: (item: number) => void;
    pageNumbers: () => number[];
    paginate: (number: number) => void;
    firstEmployerIndex: number;
    lastEmployerIndex: number;
    totalEmployers: number;
    currentPage: number;
}

export const Pagination = memo((props: PaginationProps) => {
    const {
        employersPerPage,
        setEmployersPerPage,
        pageNumbers,
        paginate,
        firstEmployerIndex,
        lastEmployerIndex,
        totalEmployers,
        currentPage,
    } = props;
    return (
        <article className={styles.Pagination}>
            <p className={styles.count}>
                {`показано ${firstEmployerIndex}-${
                    lastEmployerIndex > totalEmployers ? totalEmployers : lastEmployerIndex
                } из ${totalEmployers} результатов`}
            </p>
            <div className={styles.listWrapper}>
                <PaginateIcon
                    className={styles.icon}
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                />
                <ul className={styles.list}>
                    {pageNumbers().map((number) => (
                        <li className={styles.item} key={number}>
                            <button
                                type="button"
                                onClick={() => paginate(number)}
                                className={currentPage === number ? styles.current : ''}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
                <PaginateIcon
                    className={classNames(styles.icon, {}, [styles.right])}
                    onClick={() => paginate(currentPage < pageNumbers().length ? currentPage + 1 : currentPage)}
                />
            </div>
            <div className={styles.pageSelector}>
                <p>отображать на странице</p>
                <select defaultValue={employersPerPage}>
                    <option
                        value={10}
                        onClick={() => setEmployersPerPage(10)}
                    >
                        10
                    </option>
                    <option
                        value={15}
                        onClick={() => setEmployersPerPage(15)}
                    >
                        15
                    </option>
                    <option
                        value={20}
                        onClick={() => setEmployersPerPage(20)}
                    >
                        20
                    </option>
                </select>
            </div>
        </article>
    );
});
