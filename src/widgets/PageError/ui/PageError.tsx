import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    }
    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p> {t('Что-то пошло не так...')} </p> 
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};