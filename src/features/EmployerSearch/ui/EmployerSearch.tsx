import { useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import styles from './EmployerSearch.module.scss';

export const EmployerSearch = () => {
    const [searchRequest, setSearchRequest] = useState<string>('');

    return (
        <div className={styles.EmployerSearch}>
            <SearchIcon className={styles.icon} />
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск"
                onChange={(e) => setSearchRequest(e.target.value)}
            />
        </div>
    );
};
