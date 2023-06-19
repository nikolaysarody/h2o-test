import {
    memo,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Employers } from 'shared/assets/model';
import { Swiper } from 'widgets/Sidebar/ui/Swiper/Swiper';
import styles from './Table.module.scss';

export const Table = memo(() => {
    const bankRef = useRef<HTMLTableElement>(null);
    const docsRef = useRef<HTMLTableElement>(null);
    const HRRef = useRef<HTMLTableElement>(null);

    const [isBankOpen, setBankOpen] = useState<boolean>(false);
    const [isDocsOpen, setDocsOpen] = useState<boolean>(false);
    const [isHROpen, setHROpen] = useState<boolean>(false);

    const employersNames = useMemo(() => Employers.map((item, index) => (
        <tr key={`${item.name}_${index}`}>
            <td>{index + 1}</td>
            <td className={styles.hoverable}>{item.name}</td>
        </tr>
    )), []);

    const employersInfos = useMemo(() => Employers.map((item, index) => (
        <tr key={`${item.id}_${index}`}>
            <td>{item.id}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.birthday}</td>
            <td>{item.metro}</td>
            <td>{item.address}</td>
        </tr>
    )), []);

    const employersBanks = useMemo(() => Employers.map((item, index) => (
        <tr key={`${item.bank}_${index}`}>
            <td>{item.bank}</td>
            <td>{item.card}</td>
        </tr>
    )), []);

    const employersDocs = useMemo(() => Employers.map((item, index) => (
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
    )), []);

    const employersHR = useMemo(() => Employers.map((item, index) => (
        <tr key={`${item.post}_${index}`}>
            <td>{item.post}</td>
            <td>{item.subdivision}</td>
            <td>{item.solution}</td>
            <td>{item.source}</td>
            <td>{item.date}</td>
            <td>{item.note}</td>
        </tr>
    )), []);

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
            <div className={styles.tableScroll}>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th colSpan={6} className={styles.thCenter}>Основная информация</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Номер телефона</th>
                            <th>Пол</th>
                            <th>Дата рождения</th>
                            <th>Метро</th>
                            <th>Адрес проживания</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employersInfos}
                    </tbody>
                </table>
                <Swiper swipe={swipeBank} isOpen />
                {isBankOpen && (
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <th colSpan={2} className={styles.thCenter}>Банковская информация</th>
                            </tr>
                            <tr>
                                <th>Банк</th>
                                <th>Номер карты</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employersBanks}
                        </tbody>
                    </table>
                )}
                <Swiper swipe={swipeDocs} isOpen={isBankOpen} />
                {isDocsOpen && (
                    <table className={styles.Table} ref={docsRef}>
                        <thead>
                            <tr>
                                <th colSpan={11} className={styles.thCenter}>Документы сотрудника</th>
                            </tr>
                            <tr>
                                <th>Гражданство</th>
                                <th>Паспорт</th>
                                <th>Кем выдан</th>
                                <th>Срок действия</th>
                                <th>Место рождения</th>
                                <th>Адрес прописки</th>
                                <th>Патент</th>
                                <th>Срок действия</th>
                                <th>СНИЛС</th>
                                <th>ИНН</th>
                                <th>Мед. книжка</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employersDocs}
                        </tbody>
                    </table>
                )}
                <Swiper swipe={swipeHR} isOpen={isDocsOpen} />
                {isHROpen && (
                    <table className={styles.Table} ref={HRRef}>
                        <thead>
                            <tr>
                                <th colSpan={6} className={styles.thCenter}>Информация от HR</th>
                            </tr>
                            <tr>
                                <th>Должность</th>
                                <th>Подразделение</th>
                                <th>Решение</th>
                                <th>Источник</th>
                                <th>Дата</th>
                                <th>Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employersHR}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
});

// <div className={styles.wrapper}>
//     <table className={styles.Table}>
//         <thead>
//         <tr>
//             <th>№</th>
//             <th>Имя сотрудника</th>
//         </tr>
//         </thead>
//         <tbody>
//         {Employers.map((item, index) => (
//             <tr>
//                 <td>{index + 1}</td>
//                 <td className={styles.hoverable}>{item.name}</td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
//     <div className={styles.tableScroll}>
//         <table className={styles.Table}>
//             <thead>
//             <tr>
//                 <th colSpan={6} className={styles.thCenter}>Основная информация</th>
//                 <th colSpan={2} className={styles.thCenter}>Банковская информация</th>
//                 <th colSpan={11} className={styles.thCenter}>Документы сотрудника</th>
//                 <th colSpan={6} className={styles.thCenter}>Информация от HR</th>
//             </tr>
//             <tr>
//                 <th>ID </th>
//                 <th>Номер телефона</th>
//                 <th>Пол</th>
//                 <th>Дата рождения</th>
//                 <th>Метро</th>
//                 <th>Адрес проживания</th>
//                 <th>Банк</th>
//                 <th>Номер карты</th>
//                 <th>Гражданство</th>
//                 <th>Паспорт</th>
//                 <th>Кем выдан</th>
//                 <th>Срок действия</th>
//                 <th>Место рождения</th>
//                 <th>Адрес прописки</th>
//                 <th>Патент</th>
//                 <th>Срок действия</th>
//                 <th>СНИЛС</th>
//                 <th>ИНН</th>
//                 <th>Мед. книжка</th>
//                 <th>Должность</th>
//                 <th>Подразделение</th>
//                 <th>Решение</th>
//                 <th>Источник</th>
//                 <th>Дата </th>
//                 <th>Примечание</th>
//             </tr>
//             </thead>
//             <tbody>
//             {Employers.map((item) => (
//                 <tr>
//                     <td>{item.id}</td>
//                     <td>{item.phone}</td>
//                     <td>{item.gender}</td>
//                     <td>{item.birthday}</td>
//                     <td>{item.metro}</td>
//                     <td>{item.address}</td>
//                     <td>{item.bank}</td>
//                     <td>{item.card}</td>
//                     <td>{item.citizenship}</td>
//                     <td>{item.passport}</td>
//                     <td>{item.issued}</td>
//                     <td>{item.validity_passport}</td>
//                     <td>{item.birthplace}</td>
//                     <td>{item.residence}</td>
//                     <td>{item.patent}</td>
//                     <td>{item.validity_patent}</td>
//                     <td>{item.snils}</td>
//                     <td>{item.inn}</td>
//                     <td>{item.medcard}</td>
//                     <td>{item.post}</td>
//                     <td>{item.subdivision}</td>
//                     <td>{item.solution}</td>
//                     <td>{item.source}</td>
//                     <td>{item.date}</td>
//                     <td>{item.note}</td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     </div>
// </div>
