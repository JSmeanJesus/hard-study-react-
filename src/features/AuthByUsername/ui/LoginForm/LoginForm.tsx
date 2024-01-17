import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                value={username}
                type="text"
                autofocus
                className={cls.input}
                placeholder="username"
                onChange={onChangeUsername}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                type="text"
                autofocus
                className={cls.input}
                placeholder="password"
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.loginBtn}
            >
                Login
            </Button>
        </form>
    );
});

export default LoginForm;
