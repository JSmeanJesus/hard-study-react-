import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input/ui/Input';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {

    const {t} = useTranslation('')

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text"
                autofocus
                placeholder="Введите что-нибудь"
                className={classNames(cls.input )} />
            <Input type="text"
                
                placeholder="Введите что-нибудь"
                className={classNames(cls.input )} />
            <Button 
                className={classNames(cls.loginBtn )}>
                {t('Войти')}
            </Button>
        </form>
    );
};