import { memo } from 'react';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(() => {
    // const { t } = useTranslation();
    // const dispatch = useDispatch();
    // const {
    //     username, password, error, isLoading,
    // } = useSelector(getLoginState);
    //
    // const onChangeUsername = useCallback((value: string) => {
    //     dispatch(loginActions.setUsername(value));
    // }, [dispatch]);
    //
    // const onChangePassword = useCallback((value: string) => {
    //     dispatch(loginActions.setPassword(value));
    // }, [dispatch]);
    //
    // const onLoginClick = useCallback(() => {
    //     dispatch(loginByUsername({ username, password }));
    // }, [dispatch, password, username]);
    //
    // return (
    //     <div className={classNames(cls.LoginForm, {}, [className])}>
    //         <Text title={t('Форма авторизации')} />
    //         {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
    //         <Input
    //             autofocus
    //             type="text"
    //             className={cls.input}
    //             placeholder={t('Введите username')}
    //             onChange={onChangeUsername}
    //             value={username}
    //         />
    //         <Input
    //             type="text"
    //             className={cls.input}
    //             placeholder={t('Введите пароль')}
    //             onChange={onChangePassword}
    //             value={password}
    //         />
    //         <Button
    //             theme={ButtonTheme.OUTLINE}
    //             className={cls.loginBtn}
    //             onClick={onLoginClick}
    //             disabled={isLoading}
    //         >
    //             {t('Войти')}
    //         </Button>
    //     </div>
    // );
    return null;
});
