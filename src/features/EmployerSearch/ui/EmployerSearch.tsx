import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { tableActions } from 'widgets/Table/model/slice/tableSlice';
import styles from './EmployerSearch.module.scss';

export const EmployerSearch = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.EmployerSearch}>
            <SearchIcon className={styles.icon} />
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск"
                onChange={(e) => {
                    console.log(e.target.value);
                    dispatch(tableActions.setSearch(e.target.value));
                }}
            />
        </div>
    );
};
