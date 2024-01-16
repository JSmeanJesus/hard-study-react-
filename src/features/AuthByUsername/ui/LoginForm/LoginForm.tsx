import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispath/useAppDispath';
import cls from './LoginForm.module.scss';


export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => { // not arrow function

    const {t} = useTranslation('');
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);



    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback( async () => {
        // @ts-ignore
        const result = await dispatch(loginByUsername({username, password}));
        if ( result.meta.requestStatus === 'fulfilled' ) {
            // @ts-ignore
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password])

    return (

        <DynamicModuleLoader reducers={initialReducers} >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title='Форма авторизации' />
                {error && <Text text={error} theme={TextTheme.ERROR}  />}

                <Input type="text"
                    autofocus
                    placeholder="Введите имя пользователя"
                    className={classNames(cls.input )}
                    onChange={onChangeUsername}
                    value={username}
                
                />
                <Input type="text"
                    placeholder="Введите пароль"
                    className={classNames(cls.input )}
                    onChange={onChangePassword} 
                    value={password}
                />
                <Button 
                    className={classNames(cls.loginBtn )}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

        
    );
});


export default LoginForm;