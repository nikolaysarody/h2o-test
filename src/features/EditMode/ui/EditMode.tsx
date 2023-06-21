import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { tableActions } from 'entities/Table/model/slice/tableSlice';
import { useSelector } from 'react-redux';
import { getEditMode } from 'entities/Table/model/selectors/getEditMode/getEditMode';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './EditMode.module.scss';

export const EditMode = () => {
    const dispatch = useAppDispatch();
    const isEditMode = useSelector(getEditMode);

    return (
        <button
            type="button"
            className={classNames(styles.EditMode, { [styles.open]: isEditMode })}
            onClick={() => dispatch(tableActions.switchEditMode())}
        >
            Режим редактирования
        </button>
    );
};
